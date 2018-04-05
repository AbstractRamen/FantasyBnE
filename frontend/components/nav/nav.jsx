import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="none-user-nav">
    <Link to='/'>
      <div className='logo'></div>
    </Link>
    <div className='none-user-nav-right'>
      <Link className='nav-buttons'to="/signup">Sign Up</Link>
      <Link className='nav-buttons' to="/login">Log In</Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="logged-in-nav">
    <Link to='/'>
      <div className='logo'></div>
    </Link>
    <h2 className="header-name">Hi, {currentUser.name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Nav = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Nav;
