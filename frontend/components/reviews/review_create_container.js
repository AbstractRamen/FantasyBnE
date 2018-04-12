import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview, clearErrors } from '../../actions/review_actions';
import ReviewCreationForm from './review_creation_form';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.review
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    createReview: rev => dispatch(createReview(rev))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewCreationForm));
