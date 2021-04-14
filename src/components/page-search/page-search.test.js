import React, { Fragment } from 'react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import {
  render, screen, within, waitForElementToBeRemoved,
} from '../../test-utils';
import Header from '../header';
import SearchPage from './page-search';
import { DEFAULT_SUBREDDIT } from '../../constants';

describe('page: search', () => {
  const mockResponse = { data: { children: [] } };
  let page = null;

  beforeEach(() => {
    // A `Route` with params needs to be included, otherwise
    // `useParams` hook within component returns `undefined`.
    page = render(
      <>
        <Header />
        <Route path="/search/:subreddit">
          <SearchPage />
        </Route>
      </>,
      { route: '/search/reactjs' },
    );
  });

  it('updates url when form is submitted via button click', () => {
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    expect(input.value).toBe('reactjs');

    userEvent.clear(input);
    userEvent.type(input, 'vuejs');
    expect(input.value).toBe('vuejs');

    userEvent.click(button);
    expect(page.history.location.pathname).toBe('/search/vuejs');
  });

  it('updates url when form is submitted via \'Enter\' key on input', () => {
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('reactjs');

    userEvent.clear(input);
    userEvent.type(input, 'vuejs');
    userEvent.type(input, '{enter}'); // simulates `keyDown` of `Enter` key
    expect(page.history.location.pathname).toBe('/search/vuejs');
  });

  it('updates subreddit input value when header search link is clicked', async () => {
    const input = screen.getByRole('textbox');
    const header = screen.getByRole('banner');
    const searchLink = within(header).getByRole('link', { name: /search/i });

    expect(input.value).toBe('reactjs');

    userEvent.click(searchLink);

    expect(input.value).toBe(DEFAULT_SUBREDDIT);
  });

  // Presently, this test issues a warning about wrapping certain calls with `act`.
  // I tried using this strategy: https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
  // Need to fix.
  it('loads posts after subreddit submission', async () => {
    fetch.mockOnce(JSON.stringify(mockResponse));
    const input = screen.getByRole('textbox');

    userEvent.clear(input);
    userEvent.type(input, 'vuejs');
    userEvent.type(input, '{enter}');

    expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/vuejs/top.json?t=year&limit=100&after=null');
    await waitForElementToBeRemoved(screen.getByLabelText(/loading/i));

    // use `queryBy` to avoid an error being thrown with `getBy` due to element not existing.
    expect(screen.queryByLabelText(/error/i)).not.toBeInTheDocument();
  });
});
