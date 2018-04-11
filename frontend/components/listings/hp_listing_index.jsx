import React from 'react';
import { Route } from 'react-router-dom';

import ListingIndexItem from './hp_listing_index_item';

class ListingIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchListings();

  }

  render() {

    const listings = this.props.listings;

    return (
      <section className="listings">
        <span className='listing-intro'>
          Spotlights from around the world!
        </span>
        <div className='listing-index-container'>
          <ul className='ul-wrapper'>
            {listings.map((listing, i) => {
                if (i <= 5) {
                  return (
                    <ListingIndexItem
                      key={listing.user_id}
                      listing={listing}
                    />
                  )
                }
              })
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default ListingIndex;
