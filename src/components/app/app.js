import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../styles/normalize.css';
import '../../styles/global.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <div>
          <code>/</code>
          {' '}
          placeholder
        </div>
      </Route>
      <Route path="/search">
        <div>
          <code>/search</code>
          {' '}
          placeholder
        </div>
      </Route>
    </Switch>
  </Router>
);

export default App;
