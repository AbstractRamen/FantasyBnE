import {
  RECEIVE_LISTING_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_LISTING,
} from '../actions/listing_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    case RECEIVE_LISTING:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
