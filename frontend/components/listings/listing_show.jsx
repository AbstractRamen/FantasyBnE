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
              The Mausoleum of the First Qin Emperor (Qin Shi Huang) (Chinese: 秦始皇陵; pinyin: Qínshǐhuáng Líng) is located in Lintong District, Xi'an, Shaanxi province of China. This mausoleum was constructed over 38 years, from 246 to 208 BC, and is situated underneath a 76-meter-tall tomb mound shaped like a truncated pyramid.[1] The layout of the mausoleum is modeled on the Qin capital Xianyang, divided into inner and outer cities. The circumference of the inner city is 2.5 km (1.55 miles) and the outer is 6.3 km (3.9 miles). The tomb is located in the southwest of the inner city and faces east. The main tomb chamber housing the coffin and burial artifacts is the core of the architectural complex of the mausoleum.
            </div>
          </section>

        </div>
      </div>
    )
  }

}

export default ListingShow;
