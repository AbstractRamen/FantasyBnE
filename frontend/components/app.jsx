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
import ListingShowContainer from './listings/listing_show_container';
import ReviewCreationContainer from './reviews/review_create_container.js'

const App = () => (
  <div>
    <Modal />
    <header>
      <NavContainer />
    </header>
    <Route exact path='/' component={ListingIndexContainer} />
    <Route exact path="/listings/new" component={ListingCreationFormContainer} />
    <Switch>
      <Route path={`/listing/:id`} component={ListingShowContainer} />
   </Switch>
   <ProtectedRoute path={`/listing/:id`} component={ReviewCreationContainer} />
  </div>
)

export default App;
