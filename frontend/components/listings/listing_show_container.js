import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import values from 'lodash/values';

import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';
import selectListing from '../../reducers/selectors';
import { fetchReviews } from '../../actions/review_actions';
import { selectAllReviews } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.listings,
  params: ownProps.match.params,
  reviews: selectAllReviews(state)
});

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id)),
  fetchReviews: id => dispatch(fetchReviews(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow));
