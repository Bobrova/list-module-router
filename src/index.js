import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from "react-router-dom";
import App from './components/App';
import ItemAbout from './components/ItemAbout';
import { store } from './store/configureStore';


render(
  <HashRouter>
    <Provider store={store}>
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
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
