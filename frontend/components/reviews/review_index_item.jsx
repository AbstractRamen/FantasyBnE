import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ( {review} ) => {

  const background = {
    backgroundImage: 'url(' + review.image_url + ')',
  };

  console.log(review);
  return (
    <div className="review-index-item">
      <div className='author'>
        <div className='review-author-pic' style={background}></div>
        <div className='review-author'>
          {review.name}
        </div>
      </div>< br/>
      <div className='review-body'>
        {review.body}
      </div>
    </div>
)};

export default ReviewIndexItem;
