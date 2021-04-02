import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const renderWithWrapper = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => (
  {
    ...render(
      <Router history={history}>
        <ThemeProvider theme={theme}>
          {ui}
        </ThemeProvider>
      </Router>,
    ),
    history,
  }
);

export * from '@testing-library/react';
export { renderWithWrapper as render };
