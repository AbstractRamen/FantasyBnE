import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingCreationForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      description: '',
      address: '',
      user_id: `${this.props.currentUser.id}`,
      imageUrl: null,
      imageFile: null

    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    if (this.props.currentUser.id) {
      let formData = new FormData();
      formData.append("listing[name]", this.state.name);
      formData.append("listing[description]", this.state.description);
      formData.append("listing[address]", this.state.address);
      formData.append("listing[user_id]", this.state.user_id);
      formData.append("listing[image]", this.state.imageFile);
      this.props.makeListing(formData)
    } else {
      this.props.openModal();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  updateFile(e) {
    let that = this
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      that.setState({
        imageFile: file,
        imageUrl: fileReader.result
      });
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
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
            <input
              className='listing-input'
              onChange={this.updateFile}
              type='file'
              /><br />
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
              className='listing-input-textarea'
              placeholder='What would you like the next guest to know? Tell us all about it!'
              />
            <br/>
            <div
              className="create-listing-submit"
              onClick={this.handleSubmit}>
              Create Listing!
            </div>
          </form>
          </div>
        </div>
        <div className='create-list-right'>
          <img className='preview-upload'
            src={this.state.imageUrl}/>
        </div>
      </div>
    )
  }

}

export default withRouter(ListingCreationForm);
