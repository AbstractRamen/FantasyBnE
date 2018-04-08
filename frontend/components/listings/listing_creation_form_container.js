import { connect } from 'react-redux';

import ListingCreationForm from './listing_creation_form';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.listing
  }
}

const mapDispatchToProps = dispatch => ({
  makeListing: listing => dispatch(createListing(listing))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCreationForm);
