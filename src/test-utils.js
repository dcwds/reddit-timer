import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const renderWithWrapper = (
  ui,
  {
    route = '/',
  } = {},
) => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests
  let history = null;

  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider theme={theme}>
          {ui}
          <Route
            path="*"
            render={(props) => { history = props.history; return null; }}
          />
        </ThemeProvider>
      </MemoryRouter>,
    ),
    history,
  };
};

export * from '@testing-library/react';
export { renderWithWrapper as render };
