import React from 'react';
import { render, fireEvent } from '../../test-utils';
import Footer from './footer';
import { PROFY_EMPLOYERS_LINK } from '../../constants';

describe('footer', () => {
  it('routes profy employers link', () => {
    const { getByRole } = render(<Footer />);

    expect(getByRole('link', { name: /profy.dev/i })).toHaveAttribute('href', PROFY_EMPLOYERS_LINK);
  });

  it('routes terms link', () => {
    const { getByRole, history } = render(<Footer />);
    const spyHistoryPush = jest.spyOn(history, 'push');

    fireEvent.click(getByRole('link', { name: /terms & privacy/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith('/terms');

    spyHistoryPush.mockRestore();
  });
});
