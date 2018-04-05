import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="none-user-nav">

      <Link className='nav-buttons' to='/'>
        <div className='logo'></div>
      </Link>

    <div className='none-user-nav-right'>
      <div className='nav-buttons'>
        <Link className='nav-links' to="/signup">Sign Up</Link>
      </div>
      <div className='nav-buttons'>
        <Link className='nav-links' to="/login">Log In</Link>
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

        <h2 className="header-name">Hi, {currentUser.name}!</h2>
      
      <div className='nav-buttons'>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </div>
  </nav>
);

const Nav = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Nav;
