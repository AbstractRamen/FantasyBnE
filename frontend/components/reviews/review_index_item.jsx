import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ( review ) => {

  return (
  <li className="review-index-item">
      <Link to={`/review/${review.review.id}`}
        className='item-pic-box'>
        <img className='spotlight-pic'
          src={review.review.image_url} />
      </Link>
      <Link to={`/review/${review.review.id}`}
        className='item-name'>
        {review.review.name}
    </Link>
  </li>
)};

export default ReviewIndexItem;
