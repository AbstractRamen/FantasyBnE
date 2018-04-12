import React from 'react';
import ReviewIndexItem from './../reviews/review_index_item';
import { withRouter, Route } from 'react-router-dom';
import ReviewCreationForm from './../reviews/review_creation_form';

class ListingShow extends React.Component {
  constructor(props){
    super(props)

  }


  componentDidMount(){
    this.props.fetchListing(this.props.params.id).then(() =>
    {this.props.fetchReviews(this.props.params.id)}
    )

    this.reviews = this.props.listing.reviews || []
  }

  render() {

    const listing = this.props.listing;
    console.log(this.reviews);

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


          <ReviewCreationForm/>

        </div>
      </div>
    )
  }

}

export default ListingShow;


// {
//   this.reviews.map((review, i) => {
//       if (i <= 10) {
//         return (
//           <ReviewIndexItem
//             key={review.id}
//             review={review}
//           />
//         )
//       }
//     })
//
//
// }
