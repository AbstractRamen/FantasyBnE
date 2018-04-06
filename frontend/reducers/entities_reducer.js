import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import listingsReducer from './listing_reducer';

export default combineReducers({
  listings: listingsReducer
});
