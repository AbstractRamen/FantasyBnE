import { connect } from 'react-redux';
import React from 'react';

import ListingCreationForm from './listing_creation_form';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = ( state, ownProps ) => {
  return {
    entities: state.entities,
    errors: state.errors.listing,
    session: state.session
  }
}

const mapDispatchToProps = dispatch => ({
  makeListing: listing => dispatch(createListing(listing))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCreationForm);
