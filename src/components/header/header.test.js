import React from 'react';
import { Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { render } from '../../test-utils';
import Header from './header';

describe('header', () => {
  let header = null;
  let history = null;

  beforeEach(() => {
    history = createMemoryHistory();
    history.push = jest.fn();
    header = render(<Router history={history}><Header /></Router>);
  });

  it('routes how-it-works link', () => {
    const { getByRole } = header;

    fireEvent.click(getByRole('link', { name: /how it works/i }));

    expect(history.push).toHaveBeenCalledWith('/#how-it-works');
  });

  it('routes about link', () => {
    const { getByRole } = header;

    fireEvent.click(getByRole('link', { name: /about/i }));

    expect(history.push).toHaveBeenCalledWith('/#about');
  });

  it('routes search link with \'javascript\' url param', () => {
    const { getByRole } = header;

    fireEvent.click(getByRole('link', { name: /search/i }));

    expect(history.push).toHaveBeenCalledWith('/search/javascript');
  });
});
