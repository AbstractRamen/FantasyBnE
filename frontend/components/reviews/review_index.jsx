import React from 'react';
import { Route } from 'react-router-dom';

import ReviewIndexItem from './hp_review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchListings();

  }

  render() {

    const reviews = this.props.listings;

    return (
      <section className="listings">
        <p>Hi</p>
      </section>
    );
  }
}

export default ReviewIndex;
