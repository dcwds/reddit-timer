import React from 'react';
import Hero from './hero';
import { render, fireEvent } from '../../test-utils';

describe('hero', () => {
  let hero = null;
  let spyHistoryPush = null;

  beforeEach(() => {
    hero = render(<Hero />);
    spyHistoryPush = jest.spyOn(hero.history, 'push');
  });

  afterEach(() => {
    spyHistoryPush.mockRestore();
  });

  it('routes cta button', () => {
    const { getByRole } = hero;

    fireEvent.click(getByRole('link', { name: /show me the best time/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith('/search/javascript');
  });

  it('routes product image', () => {
    const { getByRole } = hero;

    fireEvent.click(getByRole('link', { name: /product/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith('/search/javascript');
  });
});
