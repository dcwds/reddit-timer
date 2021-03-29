import React from 'react';
import Logo from './logo';
import { render, fireEvent } from '../../test-utils';

describe('logo', () => {
  it('routes to homepage', () => {
    const { getByRole, history } = render(<Logo />);
    const spyHistoryPush = jest.spyOn(history, 'push');

    fireEvent.click(getByRole('link', { name: /logo/i }));

    expect(spyHistoryPush).toHaveBeenCalledWith('/');

    spyHistoryPush.mockRestore();
  });
});
