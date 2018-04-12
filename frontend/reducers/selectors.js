import values from 'lodash/values';

export const selectAllListings = state => values(state.entities.listings);

export const selectAllReviews = state => values(state.entities.reviews);
