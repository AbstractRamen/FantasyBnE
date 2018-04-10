import merge from 'lodash/merge';

import { RECEIVE_LISTING, RECEIVE_LISTINGS, DELETE_LISTING } from '../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings
    case RECEIVE_LISTING:
      return merge({}, state, { [action.listing.id]: action.listing })
    case DELETE_LISTING:
        delete newState[action.listing.id]
        return newState
    default:
      return state
  }
}

export default listingsReducer;
