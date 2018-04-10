import React from 'react';
import { withRouter } from 'react-router-dom';

class ShowListing extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeListing(this.state)
  }

  render() {

    return (
      <div className='create-listing-page'>
        Yo
      </div>
    )
  }

}

export default withRouter(ShowListing);
