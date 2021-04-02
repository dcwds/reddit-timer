import React from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../../styles/theme';
import Header from '../header';
import Footer from '../footer';
import Hero from '../hero';
import Info from '../info';
import Search from '../search';
import GlobalStyle from '../global-style';
import * as S from './app.style';
import { DEFAULT_SUBREDDIT } from '../../constants';

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
            <Info />
          </Route>
          <Route path="/search/:subreddit">
            <Search />
          </Route>
          <Redirect from="/search" to={`/search/${DEFAULT_SUBREDDIT}`} />
        </Switch>
        <Footer />
      </S.Wrapper>
    </ThemeProvider>
  </Router>
);

export default App;
