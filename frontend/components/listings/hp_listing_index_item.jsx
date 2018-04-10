import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ( listing ) => {

  return (
  <li className="listing-index-item">
      <Link to={`/listing/${listing.listing.id}`}
        className='item-pic-box'>
        <img className='spotlight-pic'
          src={listing.listing.image_url} />
      </Link>
      <Link to={`/listing/${listing.listing.id}`}
        className='item-name'>
        {listing.listing.name}
    </Link>
  </li>
)};

export default ListingIndexItem;
