import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';
import selectListing from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  listings: state.entities.listings[ownProps.match.params.id],
  ownProps: ownProps
});

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow));
