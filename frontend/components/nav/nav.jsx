import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (login, openModal) => (
  <section className='all-nav'>
    <nav className="none-user-nav">

        <Link className='nav-buttons' to='/'>
          <div className='logo'></div>
          <div className='title-banner'>FantasyBnE</div>
        </Link>

      <div className='none-user-nav-right'>
        <div className='nav-buttons' >
          <Link className='become-host' to='/listings/new'>Become a host</Link>
        </div>
        <div className='nav-buttons' onClick={() => login(user)}>
          <span className='nav-links'>Try it out!</span>
        </div>
        <div className='nav-buttons' onClick={() => openModal('signup')}>
          <span className='nav-links'>Sign Up</span>
        </div>
        <div className='nav-buttons' onClick={() => openModal('login')}>
          <span className='nav-links'>Log In</span>
        </div>
      </div>
      <div className='footer'>
        <Link to=''>Github</Link>
        <Link to=''>Linkedin</Link>
      </div>
    </nav>
    <div className='footer'>
      <a className='footer-links' href='https://github.com/AbstractRamen'>Github</a> &nbsp;&nbsp;&nbsp;&nbsp;
      <a className='footer-links' href='https://www.linkedin.com/in/jtcio/'>Linkedin</a>
    </div>
  </section>

);

const personalGreeting = (currentUser, logout) => (
  <section className='all-nav'>
    <nav className="none-user-nav">

        <Link className='nav-buttons' to='/'>
          <div className='logo'></div>
        </Link>

      <div className='none-user-nav-right'>
        <div className='nav-buttons-greet' >
          <h2 className="header-name">Hi, {currentUser.name}!</h2>
        </div>
        <div className='nav-buttons'>
          <Link className='become-host' to='/listings/new'>Become a host</Link>
        </div>
        <div className='nav-buttons' onClick={logout}>
          <Link className='become-host' to='/'>Log Out</Link>
        </div>
        <div className='nav-buttons-avatar'>
          <img className='avatar'
            src={currentUser.image_url} />
        </div>
      </div>
    </nav>
    <div className='footer'>
      <a className='footer-links' href='https://github.com/AbstractRamen'>Github</a> &nbsp;&nbsp;&nbsp;&nbsp;
      <a className='footer-links' href='https://www.linkedin.com/in/jtcio/'>Linkedin</a>
    </div>
  </section>
);

const Nav = ({ currentUser, logout, login, openModal }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login, openModal)
);

const user = {
    email: 'adventurer@dream.brave',
    password: '123456'
  }

export default Nav;
