import values from 'lodash/values';

export const selectAllListings = state => values(state.entities.listings);

export const selectListing = (state, id) => values(state.entities.listings[id])
