import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils';
import Footer from './footer';
import { PROFY_EMPLOYERS_LINK } from '../../constants';

describe('footer', () => {
  let footer = null;

  beforeEach(() => {
    footer = render(<Footer />);
  });
  it('routes profy employers link', () => {
    expect(screen.getByRole('link', { name: /profy.dev/i })).toHaveAttribute('href', PROFY_EMPLOYERS_LINK);
  });

  it('routes terms link', () => {
    userEvent.click(screen.getByRole('link', { name: /terms & privacy/i }));

    expect(footer.history.location.pathname).toBe('/terms');
  });
});
