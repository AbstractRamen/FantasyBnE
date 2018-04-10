import values from 'lodash/values';

const selectAllListings = state => values(state.entities.listings);

export default selectAllListings
