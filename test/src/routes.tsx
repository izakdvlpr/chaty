import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';
// import Login from '@pages/Login';
// import Register from '@pages/Register';
import Test from '@pages/Test';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Test} />
      {/* <Route path="/register" component={Register} /> */}
    </Switch>
  );
}

export default Routes;
