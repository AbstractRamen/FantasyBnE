import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { fetchReviews, deleteReview, createReview } from '../../actions/review_actions.js'

const mapStateToProps = (state, ownProps) => ({
  reviews: state.entities.listings.reviews,
  listingId: ownProps
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  deleteReview: review => dispatch(deleteReview(review)),
  fetchReviews: (id) => dispatch(fetchReviews(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
