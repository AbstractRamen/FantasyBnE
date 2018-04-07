import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavContainer from './nav/nav_container'

import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ListingCreationFormContainer from './listings/listing_creation_form_container';
import Modal from './modal/modal'

const App = () => (
  <div>
    <Modal />
    <header>
      <NavContainer />
    </header>
    <Switch>
      <ProtectedRoute exact path="/listing/new" component={ListingCreationFormContainer} />
   </Switch>
  </div>
)

export default App;
