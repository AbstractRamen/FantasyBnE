import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ( {review, id} ) => {

  const background = {
    backgroundImage: 'url(' + review.image_url + ')',
  };


  return (
    <div className="review-index-item" id={id}>
      <div className='author'>
        <div className='review-author-pic' style={background}></div>
        <div className='blurb-container'>
        <div className='review-author'>
          {review.name}
        </div>
        <div className='created-date'>
          Created exactly at machine-time: {review.created_at}
        </div>
      </div>
      </div>< br/>
      <div className='review-body'>
        {review.body}
      </div>
    </div>
)};

export default ReviewIndexItem;
