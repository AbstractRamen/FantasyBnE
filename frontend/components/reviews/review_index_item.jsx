import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ( {review} ) => {

  console.log(review);
  return (
    <div className="review-index-item">
      <div className='review-author'>
        {review.name}
      </div>
      <div className='review-body'>
        {review.body}
      </div>
    </div>
)};

export default ReviewIndexItem;
