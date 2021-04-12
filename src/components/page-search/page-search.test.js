import React, { Fragment } from 'react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import { render, screen, within } from '../../test-utils';
import Header from '../header';
import SearchPage from './page-search';
import { DEFAULT_SUBREDDIT } from '../../constants';

describe('page: search', () => {
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
});
