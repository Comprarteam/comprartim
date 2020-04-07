import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './components/landing';
import Requests from './components/requests';

ReactDOM.render(
  <HashRouter basename="/">
    <Route exact path="/" component={Landing} />
    <Route
      exact
      path="/requests/:communityId"
      render={(routeProps) => <Requests routeProps={routeProps} />}
    />
  </HashRouter>,
  document.getElementById('app'),
);
