import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavContainer from './nav/nav_container'

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ListingCreationFormContainer from './listings/listing_creation_form_container';
import Modal from './modal/modal';
import ListingIndexContainer from './listings/hp_listing_index_container';


const App = () => (
  <div>
    <Modal />
    <header>
      <NavContainer />
    </header>
    <Route exact path='/' component={ListingIndexContainer} />
    <Route exact path="/listing/new" component={ListingCreationFormContainer} />

    <Switch>
   </Switch>
  </div>
)

export default App;
