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
      <div className='listing-container'>
        <div className='splash-main'>
          <p className='caption'>
            Explore and rest
          </p>
        </div>
        <section className="listings">
          <span className='listing-intro'>
            Spotlights from around the world!
          </span>
          <div className='listing-index-container'>
            <ul className='ul-wrapper'>
              {listings.map((listing, i) => {
                  if (i <= 10) {
                    return (
                      <ListingIndexItem
                        key={listing.id}
                        listing={listing}
                      />
                    )
                  }
                })
              }
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ListingIndex;
