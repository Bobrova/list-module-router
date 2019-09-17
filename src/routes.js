import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import ItemAbout from './components/ItemAbout';

const routes = (
  <Switch>
    <Route
      path="/"
      component={App}
      exact
    />
    <Route
      path="/list/:id"
      component={ItemAbout}
      exact
    />
  </Switch>
);
export default routes;