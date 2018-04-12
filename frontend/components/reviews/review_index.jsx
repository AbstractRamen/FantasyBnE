import React from 'react';
import { Route } from 'react-router-dom';
import values from 'lodash/values';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props)


  }

  componentDidMount() {
    this.props.fetchReviews(this.props.listingId.ownProps)
  }

  render() {

    let reviews = this.props.reviews
    console.log(this.props);
    console.warn(this.props);

    return (
      <section className="reviews">



      </section>
    );
  }
}

export default ReviewIndex;
