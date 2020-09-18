import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Register from '../pages/Register';
import Profile from '../pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />        
        <Route path="/@me" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
