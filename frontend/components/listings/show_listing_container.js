import { connect } from 'react-redux';

import ShowListing from './listing_show';
import { fetchListing } from '../../actions/listing_actions';
import selectAllListings from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowListing);
