import { combineReducers } from 'redux';

import listingsReducer from './listing_reducer';
import reviewsReducer from './review_reducer';

export default combineReducers({
  listings: listingsReducer,
  reviews: reviewsReducer
});
