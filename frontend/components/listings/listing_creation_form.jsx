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
    this.props.createListing(this.state)
  }

  updateField(field) {
    return(e) => (
      this.setState({[field]: e.target.value})
    )
  }

  renderErrors() {

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
      <div className='creating-listing'>
        <div className="login-form">
          {this.renderErrors()}
        </div>
        <form onSubmit={this.handleSubmit} className='listing-creation-form'>
          <input type='text'
            onChange={this.updateField('name')}
            className='listing-input'
            value={this.state.name}
            />
          <input type='text'
            onChange={this.updateField('address')}
            className='listing-input'
            value={this.state.address}
            />
          <textarea
            onChange={this.updateField('description')}
            className='listing-input'
            value={this.state.description}
            />
        </form>
      </div>
    )
  }

}

export default withRouter(ListingCreationForm);
