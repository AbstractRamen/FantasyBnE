import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingCreationForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      description: '',
      address: '',
      user_id: `${this.props.currentUser.id}`
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    if (this.props.currentUser.id) {
      this.props.makeListing(this.state)
    } else {
      this.props.openModal();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  renderErrors() {
    console.log(this.props);
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`listing-error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className='create-listing-page'>
        <div className='creating-listing'>
          <div className='listing-text'>
          <div className='form-words'>
            Hi, {this.props.currentUser.name || 'traveler'}! Let's get started listing your space.
          </div>
          <div className="creation-errors">
            {this.renderErrors()}
          </div>
          <form className='listing-creation-form'>
            <input type='text'
              value={this.state.name}
              onChange={this.update('name')}
              className='listing-input'
              placeholder='What is your place called?'
              /><br/>
            <input type='text'
              value={this.state.address}
              onChange={this.update('address')}
              className='listing-input'
              placeholder='Where is your place?'
              /><br/>
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
              className='listing-input-textarea'
              placeholder='What would you like the next guest to know? Tell us all about it!'
              /><br/>
            <div
              className="create-listing-submit"
              onClick={this.handleSubmit}
              >Create Listing!</div>
          </form>
          </div>
        </div>
        <div className='create-list-right'>
        </div>
      </div>
    )
  }

}

export default withRouter(ListingCreationForm);
