import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Counter from './containers/Counter';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </App>
);
