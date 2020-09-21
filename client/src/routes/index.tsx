import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Chat from '../pages/Chat';
import Config from '../pages/Config';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />

        <Route path="/chats/:id" component={Chat} />
        <Route path="/profile" component={Profile} />
        <Route path="/config" component={Config} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
