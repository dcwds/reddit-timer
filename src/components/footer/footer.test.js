import React from 'react';
import { render, fireEvent } from '../../test-utils';
import Footer from './footer';

describe('footer', () => {
  it('routes terms link', () => {
    const { getByRole, history } = render(<Footer />);
    const spyHistoryPush = jest.spyOn(history, 'push');

    fireEvent.click(getByRole('link', { name: /terms & privacy/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith('/terms');

    spyHistoryPush.mockRestore();
  });
});
