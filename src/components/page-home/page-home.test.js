import React from 'react';
import HomePage from './page-home';
import { fireEvent, render, screen } from '../../test-utils';
import * as C from '../../constants';

describe('page: home', () => {
  let page = null;

  beforeEach(() => {
    page = render(<HomePage />);
  });

  it('routes CTA button', () => {
    fireEvent.click(screen.getByRole('link', { name: /show me the best time/i }));

    expect(page.history.location.pathname).toBe(`/search/${C.DEFAULT_SUBREDDIT}`);
  });

  it('routes heatmap image', () => {
    fireEvent.click(screen.getByRole('link', { name: /heatmap/i }));

    expect(page.history.location.pathname).toBe(`/search/${C.DEFAULT_SUBREDDIT}`);
  });

  it('routes profy link', () => {
    expect(screen.getByRole('link', { name: /profy.dev/i })).toHaveAttribute('href', C.PROFY_LINK);
  });

  it('routes profy employers link', () => {
    expect(screen.getByRole('link', {
      name: /click here for more information/i,
    })).toHaveAttribute('href', C.PROFY_EMPLOYERS_LINK);
  });
});
