import React from 'react';

class ReviewCreationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing_id: this.props.match.params.id,
      body: '',
      author_id: this.props.currentUser.id
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review)
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`session-error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  render() {
    

    return (
      <div className='review-creation-container'>
        <p className='review-intro'>
          We're glad you enjoyed your stay! What would you like to tell others about it?
        </p>
        <div className="review-errors">
          {this.renderErrors()}
        </div>
        <form className='review-create-form'
          onSubmit={this.handleSubmit}>
          <textarea
            className='review-body'
            onChange={this.update('body')}
            placeholder='What do you want to say?'
            type='text'
            value={this.body} />
          <input className="review-submit" type="submit" value='Submit Review!' />
        </form>
      </div>
    )
  }

}

export default ReviewCreationForm;
