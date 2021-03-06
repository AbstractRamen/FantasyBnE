import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import listingErrorsReducer from './listing_errors_reducer';
import reviewErrorsReducer from './reviews_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  listing: listingErrorsReducer,
  review: reviewErrorsReducer
});
