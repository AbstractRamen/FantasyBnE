import React from 'react';
import ReviewIndexItem from './../reviews/review_index_item';
import { withRouter, Route } from 'react-router-dom';
import ReviewIndexContainer from './../reviews/review_index_container';
import ReviewCreationContainer from './../reviews/review_create_container';

class ListingShow extends React.Component {
  constructor(props){
    super(props)

  }


  componentDidMount(){
    this.props.fetchListing(this.props.params.id).then(() =>
    {this.props.fetchReviews(this.props.params.id)}
    )

    this.reviews = this.props.listing.reviews || []
    window.scrollTo(0, 0)
  }

  render() {

    const listing = this.props.listing;

    const background = {
      backgroundImage: 'url(' + listing.image_url + ')',
    };

    return (
      <div className='show-listing-page'>
        <div className='show-splash-pic' style={background}>
          {/*<img className='show-pic'
            src={listing.image_url} />*/}
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


          <ReviewCreationContainer />
          <ReviewIndexContainer />
        </div>
      </div>
    )
  }

}

export default ListingShow;
