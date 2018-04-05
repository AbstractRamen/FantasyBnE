import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavContainer from './nav/nav_container'

import { AuthRoute } from '../util/route_util.jsx';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>
    <Switch>
     <AuthRoute exact path="/login" component={LogInFormContainer} />
     <AuthRoute exact path="/signup" component={SignUpFormContainer} />

   </Switch>
  </div>
)

export default App;
