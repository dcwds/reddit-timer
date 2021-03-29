import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../../theme';
import Header from '../header';
import GlobalStyle from '../global-style';

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 90rem; /* 1440px */
  padding: 0 5rem; /* 80px */
`;

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />

      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/search">
            Search
          </Route>
        </Switch>
      </Wrapper>
    </ThemeProvider>
  </Router>
);

export default App;
