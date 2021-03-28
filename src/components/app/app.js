import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../global-style';
import Header from '../header';

const App = () => (
  <Router>
    <Normalize />
    <GlobalStyle />

    <Header />
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route path="/search">
        Search
      </Route>
    </Switch>
  </Router>
);

export default App;
