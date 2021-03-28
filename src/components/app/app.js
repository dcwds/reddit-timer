import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import '../../styles/global.css';

const App = () => (
  <Router>
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
