import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

const renderWithWrapper = (ui, options) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { renderWithWrapper as render };
