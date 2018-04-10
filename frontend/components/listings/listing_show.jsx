import React from 'react';
import { withRouter, Route } from 'react-router-dom';

class ListingShow extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchListing(this.props.ownProps.match.params.id)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeListing(this.state)
  }

  render() {
    console.log(this.props);
    return (
      <div className='create-listing-page'>

      </div>
    )
  }

}

export default ListingShow;
