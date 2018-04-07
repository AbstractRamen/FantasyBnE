import { connect } from 'react-redux';

import ListingCreationForm from './listing_creation_form';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = ( state ) => {
  console.log(state);
  return {
    errors: state.errors.listing
  }
}

const mapDispatchToProps = dispatch => ({
  createListing: listing => dispatch(createListing(listing))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCreationForm);
