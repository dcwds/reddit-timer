import React from 'react';
import Info from './info';
import { render } from '../../test-utils';
import { PROFY_LINK, PROFY_EMPLOYERS_LINK } from '../../constants';

describe('info', () => {
  it('routes profy link', () => {
    const { getByRole } = render(<Info />);

    expect(getByRole('link', { name: /profy.dev/i })).toHaveAttribute('href', PROFY_LINK);
  });

  it('routes profy employers link', () => {
    const { getByRole } = render(<Info />);

    expect(getByRole('link', { name: /click here for more information/i })).toHaveAttribute('href', PROFY_EMPLOYERS_LINK);
  });
});
