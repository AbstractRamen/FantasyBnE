import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingCreationForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      description: '',
      address: ''
    };

    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeListing(this.state)
  }

  updateField(field) {
    return(e) => (
      this.setState({[field]: e.target.value})
    )
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
          <div className="creation-errors">
            {this.renderErrors()}
          </div>
          <form onSubmit={this.handleSubmit} className='listing-creation-form'>
            <input type='text'
              onChange={this.updateField('name')}
              className='listing-input'
              placeholder='What would you like to call your place?'
              value={this.state.name}
              /><br/>
            <input type='text'
              onChange={this.updateField('address')}
              className='listing-input'
              placeholder='Where is your place?'
              value={this.state.address}
              /><br/>
            <textarea
              onChange={this.updateField('description')}
              className='listing-input-textarea'
              placeholder='What would you like the next guest to know? Tell us all about it!'
              value={this.state.description}
              /><br/>
            <input className="create-listing-submit" type="submit" value='Create Listing!' />
          </form>
        </div>
        <div className='create-list-right'>
        </div>
      </div>
    )
  }

}

export default withRouter(ListingCreationForm);
