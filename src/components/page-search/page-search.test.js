import React, { Fragment } from 'react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import {
  render, screen, within, waitForElementToBeRemoved,
} from '../../test-utils';
import Header from '../header';
import SearchPage from './page-search';
import { DEFAULT_SUBREDDIT } from '../../constants';

// A `Route` with params needs to be included, otherwise
// `useParams` hook within component returns `undefined`
const setup = (route) => render(
  <>
    <Header />
    <Route path="/search/:subreddit">
      <SearchPage />
    </Route>
  </>,
  { route },
);

describe('subreddit form', () => {
  it('updates url when form is submitted via button click', () => {
    const { history } = setup('/search/reactjs');
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    expect(input.value).toBe('reactjs');

    userEvent.clear(input);
    userEvent.type(input, 'vuejs');
    expect(input.value).toBe('vuejs');

    userEvent.click(button);
    expect(history.location.pathname).toBe('/search/vuejs');
  });

  it('updates url when form is submitted via \'Enter\' key on input', () => {
    const { history } = setup('/search/reactjs');
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('reactjs');

    userEvent.clear(input);
    userEvent.type(input, 'vuejs');
    userEvent.type(input, '{enter}'); // simulates `keyDown` of `Enter` key
    expect(history.location.pathname).toBe('/search/vuejs');
  });

  it('updates subreddit input value when header search link is clicked', () => {
    setup('/search/reactjs');
    const input = screen.getByRole('textbox');
    const header = screen.getByRole('banner');
    const searchLink = within(header).getByRole('link', { name: /search/i });

    expect(input.value).toBe('reactjs');

    userEvent.click(searchLink);

    expect(input.value).toBe(DEFAULT_SUBREDDIT);
  });
});

describe('heatmap', () => {
  it('loads posts into heatmap via subreddit in URL', async () => {
    setup('/search/reactjs');

    await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i), { timeout: 10000 });

    const heatmap = screen.getByLabelText(/heatmap/i);
    expect(heatmap).toBeInTheDocument();

    const cells = await within(heatmap).findAllByRole('button');
    expect(cells.length).toBe(7 * 24);

    const numPostsPerCell = cells.map((c) => c.innerHTML);
    expect(numPostsPerCell).toMatchSnapshot();

    expect(within(screen.getByLabelText(/timezone/i)).getByText('Europe/Berlin')).toBeInTheDocument();
  });

  it('highlights cells when they are clicked', async () => {
    setup('/search/reactjs');

    const heatmap = await screen.findByLabelText(/heatmap/i);
    const cells = await within(heatmap).findAllByRole('button');
    const cellToClick = cells[1];
    const clickedBgStyle = 'background-color: #141926';

    expect(cellToClick).not.toHaveStyle(clickedBgStyle);

    userEvent.click(cellToClick);
    expect(cellToClick).toHaveStyle(clickedBgStyle);
  });

  it('shows post table with correct post titles', async () => {
    setup('/search/5-posts');

    const heatmap = await screen.findByLabelText(/heatmap/i);
    const cells = await within(heatmap).findAllByRole('button');
    const cellToClick = cells[95]; // Wed at 11pm Europe/Berlin

    userEvent.click(cellToClick);
    const postsTable = await screen.findByLabelText(/posts table/i);
    const posts = await within(postsTable).findAllByLabelText(/title/i);
    const titles = posts.map((p) => p.textContent);

    expect(titles).toEqual([
      'test post 1',
      'test post 2',
      'test post 3',
      'test post 4',
      'test post 5',
    ]);
  });

  it('renders error message', async () => {
    setup('/search/failing-request');
    expect(await screen.findByLabelText(/error/i)).toBeInTheDocument();
  });
});
