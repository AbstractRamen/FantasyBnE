import React from 'react';
import { Route } from 'react-router-dom';
import values from 'lodash/values';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchReviews(this.props.listingId.ownProps).then(() =>
    this.setState(this.props.reviews))
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.values!==this.props.values)
      {this.props.fetchReviews(this.props.listingId.ownProps).then(() =>
      this.setState(this.props.reviews))}
  }

  render() {
    let reviews = this.props.reviews;

    return (
      <section className="reviews">
        <div className='reviews-counter'>
          There are {reviews.length} reviews for this location!
        </div>< br/>
        { reviews.map((review, idx) => {
            let id;

            if (idx === reviews.length - 1) id = 'last-review';

            return (<ReviewIndexItem
              key={review.id}
              review={review}
              id={id}
              />
            );
          })
        }
      </section>
    );
  }
}

export default ReviewIndex;
