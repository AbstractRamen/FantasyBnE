import React from 'react';

class ReviewCreationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

        };

  }

  componentWillReceiveProps(prop) {

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleNew(e) {

  }

  handleErrors(e) {

  }


  render() {
    console.warn(this.props);

    return (

      <p>
        H
      </p>
    )
  }

}

export default ReviewCreationForm;
