import React from 'react';
import { Route } from 'react-router-dom';
import values from 'lodash/values';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props)

    this.state = this.props.reviews
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.listingId.ownProps).then(() =>
    this.setState(this.props.reviews))
  }

  componentWillReceiveProps(nextProps){
    debugger
    if(nextProps.values!==this.props.values)
      {this.props.fetchReviews(this.props.listingId.ownProps).then(() =>
      this.setState(this.props.reviews))}
  }

  render() {
    const reviews = this.props.reviews;
    console.warn(this.props.value);

    return (
      <section className="reviews">
        <div className='reviews-counter'>
          There are {reviews.length} reviews for this location!
        </div>< br/>
        { reviews.map(review => (
            <ReviewIndexItem
              key={review.id}
              review={review}
              />
          ))
        }
      </section>
    );
  }
}

export default ReviewIndex;
