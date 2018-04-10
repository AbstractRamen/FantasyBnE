import React from 'react';
import { Route } from 'react-router-dom';

import ListingIndexItem from './hp_listing_index_item';

class ListingIndex extends React.Component {

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {

    const listings = this.props.listings;
    debugger

    return (
      <section className="listings">
        <ul>
          {listings.map(listing => <ListingIndexItem key={listing.id} listings={listing} />)}
        </ul>
      </section>
    );
  }
}

export default ListingIndex;
