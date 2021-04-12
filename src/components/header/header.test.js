import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils';
import Header from './header';
import { DEFAULT_SUBREDDIT } from '../../constants';

describe('header', () => {
  let header = null;

  beforeEach(() => {
    header = render(<Header />);
  });

  it('routes how-it-works link', () => {
    expect(screen.getByRole('link', { name: /how it works/i })).toHaveAttribute('href', '/#how-it-works');
  });

  it('routes about link', () => {
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/#about');
  });

  it(`routes search link with "${DEFAULT_SUBREDDIT}" url param`, () => {
    userEvent.click(screen.getByRole('link', { name: /search/i }));

    expect(header.history.location.pathname).toBe(`/search/${DEFAULT_SUBREDDIT}`);
  });
});
