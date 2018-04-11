import { connect } from 'react-redux';

import ReviewIndex from './hp_listing_index';
import { selectAllListings } from '../../reducers/selectors';

const mapStateToProps = state => ({
  reviews: state.entities.reviews
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  deleteReview: review => dispatch(deleteReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
