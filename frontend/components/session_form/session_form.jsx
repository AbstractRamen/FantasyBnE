import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email Address',
      name: 'What should we call you?',
      password: 'Password'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className='session-modal-padding'>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <section className='modal-styling'>
            <div onClick={this.props.closeModal} className="close-x">
              X
            </div>
            <br/>
            <p className='login-modal-text'>
              {this.renderErrors()}
              <br/>
            </p>
              <div className="login-form">
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </div>
              <div className="login-form">
                <br/>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="login-input"
                  />
              </div>
              <div className="login-form">
                <br/>

                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
                </div>
                <div className="login-form">
                  <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </section>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
