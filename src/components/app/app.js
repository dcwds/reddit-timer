import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../../styles/theme';
import Header from '../header';
import Footer from '../footer';
import Hero from '../hero';
import GlobalStyle from '../global-style';
import * as S from './app.style';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />

      <S.Wrapper>
        <Header />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/search">
            Search
          </Route>
        </Switch>
        <Footer />
      </S.Wrapper>
    </ThemeProvider>
  </Router>
);

export default App;
