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
  it('loads posts after subreddit submission', async () => {
    setup('/search/reactjs');

    // A `timeout` is specified equal to the CSS animation duration for the spinner element (1500ms)
    await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i), { timeout: 1500 });
    expect(await screen.findByLabelText(/heatmap/i)).toBeInTheDocument();
  });

  it('renders error message', async () => {
    setup('/search/failing-request');
    expect(await screen.findByLabelText(/error/i)).toBeInTheDocument();
  });
});
