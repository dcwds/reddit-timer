import React from 'react';
import { render, fireEvent } from '../../test-utils';
import Header from './header';

describe('header', () => {
  let header = null;
  let spyHistoryPush = null;

  beforeEach(() => {
    header = render(<Header />);
    spyHistoryPush = jest.spyOn(header.history, 'push');
  });

  afterEach(() => {
    spyHistoryPush.mockRestore();
  });

  it('routes how-it-works link', () => {
    const { getByRole } = header;

    fireEvent.click(getByRole('link', { name: /how it works/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith('/#how-it-works');
  });

  it('routes about link', () => {
    const { getByRole } = header;

    fireEvent.click(getByRole('link', { name: /about/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith('/#about');
  });

  it('routes search link with \'javascript\' url param', () => {
    const { getByRole } = header;

    fireEvent.click(getByRole('link', { name: /search/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith('/search/javascript');
  });
});
