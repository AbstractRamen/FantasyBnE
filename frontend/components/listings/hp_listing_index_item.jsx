import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ( listing ) => (
  <li className="listing-index-item">
    <Link to={`/listing/${listing.id}`}>
      <span>{listing.name}</span>
    </Link>
  </li>
);

export default ListingIndexItem;
