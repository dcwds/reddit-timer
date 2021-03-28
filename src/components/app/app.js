import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../global-style';

const App = () => (
  <Router>
    <Normalize />
    <GlobalStyle />
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
