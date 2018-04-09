import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (login, openModal) => (
  <nav className="none-user-nav">

      <Link className='nav-buttons' to='/'>
        <div className='logo'></div>
      </Link>

    <div className='none-user-nav-right'>
      <div className='nav-buttons' >
        <Link className='become-host' to='/listing/new'>Become a host</Link>
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
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <nav className="none-user-nav">

      <Link className='nav-buttons' to='/'>
        <div className='logo'></div>
      </Link>

    <div className='none-user-nav-right'>
      <div className='nav-buttons-greet' >
        <h2 className="header-name">Hi, {currentUser.name}!</h2>
      </div>
      <div className='nav-buttons' onClick={() =>
          { if (this.props.session.currentUser) {
            null
          } else {
            openModal('login')
          }
        }}>
        <Link className='become-host' to='/listing/new'>Become a host</Link>
      </div>
      <div className='nav-buttons' onClick={logout}>
        <Link className='become-host' to='/'>Log Out</Link>
      </div>
    </div>
  </nav>
);

const Nav = ({ currentUser, logout, login, openModal }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login, openModal)
);

const user = {
    email: 'adventurer@dream.brave',
    password: '123456'
  }

export default Nav;
