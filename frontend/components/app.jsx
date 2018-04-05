import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container'

import { AuthRoute } from '../util/route_util.jsx';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <Link to='/'>
        <h1>Fantasy BnE</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
     <AuthRoute exact path="/login" component={LogInFormContainer} />
     <AuthRoute exact path="/signup" component={SignUpFormContainer} />

   </Switch>
  </div>
)

export default App;
