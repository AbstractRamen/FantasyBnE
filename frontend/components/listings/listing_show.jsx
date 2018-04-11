import React from 'react';
import { withRouter, Route } from 'react-router-dom';

class ListingShow extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchListing((this.props.params.id))
  }

  render() {

    const listing = this.props.listing;

    return (
      <div className='create-listing-page'>
        Why
        {listing.name}
        <img src={listing.image_url} />
      </div>
    )
  }

}

export default ListingShow;
