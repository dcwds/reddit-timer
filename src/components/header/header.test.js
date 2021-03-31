import React from 'react';
import { render, fireEvent } from '../../test-utils';
import Header from './header';
import { DEFAULT_SUBREDDIT } from '../../constants';

describe('header', () => {
  it('routes how-it-works link', () => {
    const { getByRole } = render(<Header />);

    expect(getByRole('link', { name: /how it works/i })).toHaveAttribute('href', '/#how-it-works');
  });

  it('routes about link', () => {
    const { getByRole } = render(<Header />);

    expect(getByRole('link', { name: /about/i })).toHaveAttribute('href', '/#about');
  });

  it(`routes search link with "${DEFAULT_SUBREDDIT}" url param`, () => {
    const { getByRole, history } = render(<Header />);
    const spyHistoryPush = jest.spyOn(history, 'push');

    fireEvent.click(getByRole('link', { name: /search/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith(`/search/${DEFAULT_SUBREDDIT}`);

    spyHistoryPush.mockRestore();
  });
});
