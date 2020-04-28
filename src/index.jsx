import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Community from './components/Community/Community';
import Landing from './components/Landing/Landing';
import LoginPage from './components/LoginPage/LoginPage';
import NewCommunity from './components/NewCommunity/NewCommunity';
import NewRequest from './components/NewRequest/NewRequest';
import NewUser from './components/NewUser/NewUser';
import PrintPage from './components/PrintPage/PrintPage';
import RequestsList from './components/RequestsList/RequestsList';
import './index.scss';

ReactDOM.render(
  <HashRouter basename="/">
    <Route exact path="/new-community" component={NewCommunity} />
    <Route exact path="/chat/:contact/:userId/:chatId" component={Chat} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/new-request" component={NewRequest} />
    <Route exact path="/requests" component={RequestsList} />
    <Route exact path="/new-user" component={NewUser} />
    <Route exact path="/community/:communityId/print" component={PrintPage} />
    <Route
      exact
      path="/community/:communityId/"
      render={(routeProps) => <Community routeProps={routeProps} />}
    />
    <Route exact path="/" component={Landing} />
  </HashRouter>,
  document.getElementById('app'),
);
