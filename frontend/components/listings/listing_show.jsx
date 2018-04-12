import React from 'react';
import ReviewIndexContainer from './../reviews/review_index_container';
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
      <div className='show-listing-page'>
        <div className='show-splash-pic'>
          <img className='show-pic'
            src={listing.image_url} />
        </div>


        <div className='below-show-pic'>

          <div className='top-desc'>
            <h1 className='show-name'>
              {listing.name}
            </h1>
          </div><br />


          <section className='bottom-desc'>
            <div className='desc-blurb'>
              {listing.description}
            </div>
          </section>

          <ReviewIndexContainer
            ownProps={this.props.params.id}
            reviews={listing}/>
        </div>


      </div>
    )
  }

}

export default ListingShow;
