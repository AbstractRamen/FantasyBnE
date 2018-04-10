import { connect } from 'react-redux';
import React from 'react';

import ListingCreationForm from './listing_creation_form';
import { createListing } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ( state, ownProps ) => {
  return {
    errors: state.errors.listing,
    currentUser: state.session.currentUser || {}
  }
}

const mapDispatchToProps = dispatch => ({
  makeListing: listing => dispatch(createListing(listing)),
  openModal: () => dispatch(openModal('login'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCreationForm);
