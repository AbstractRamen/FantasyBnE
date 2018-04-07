import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
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
      <div className="login-form-container">
        <div className='session-modal-padding'>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <section className='modal-styling'>
            <div onClick={this.props.closeModal} className="close-x">
              X
            </div>
            <br/>
            <div className='login-modal-text'>
            <div className="login-form">
              {this.renderErrors()}
            </div>
              <br/>
            </div>
              <div className="login-form">
                <input type="text"
                  value={this.state.email}
                  placeholder='Email Address'
                  onChange={this.update('email')}
                  className="login-input"
                />
              </div>

              {this.props.formType === 'Sign Up' ? (
              <div className="login-form">
                <br/>
                <input type="text"
                  value={this.state.name}
                  placeholder='What would you like us to call you?'
                  onChange={this.update('name')}
                  className='login-input'
                  />
              </div>
            ) : (null
                )}



              <div className="login-form">
                <br/>

                <input type="password"
                  value={this.state.password}
                  placeholder='Password'
                  onChange={this.update('password')}
                  className="login-input"
                />
                </div>
                <div className="login-form">
                  <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
              <div className="login-input login-form">
                Not the right form?&nbsp;{this.props.otherForm}&nbsp;instead!
              </div>
            </section>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
