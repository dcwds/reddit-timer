import React from 'react';
import Logo from './logo';
import { render, fireEvent, screen } from '../../test-utils';

describe('logo', () => {
  it('routes to homepage', () => {
    const { history } = render(<Logo />);

    fireEvent.click(screen.getByRole('link', { name: /logo/i }));
    expect(history.location.pathname).toBe('/');
  });
});
