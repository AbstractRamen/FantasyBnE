import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ( listing ) => {

  return (
  <li className="listing-index-item">
      <Link to={`/listings/${listing.listing.id}`}
        className='item-pic-box'>
        <span class-name='item-pic'></span>
      </Link>
      <Link to={`/listings/${listing.listing.id}`}
        className='item-name'>
        {listing.listing.name}
    </Link>
  </li>
)};

export default ListingIndexItem;
