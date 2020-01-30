import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/user.png';

export default function NavBar({ userInfo }) {

  return(
    <div className='head-container'>
      <div className='nav-bar'>
        <div className='nav-image'>
          <NavLink to="/" className='img-link'>
            <img src={logo} alt='site-logo' />{' '}
            <p className='logo-text'>LinkUp</p>
          </NavLink>
        </div>
        <div className='nav-links'>
          <NavLink to="/profile" className='a'>Profile</NavLink>
          <NavLink 
            to={userInfo.name ? "/signout" : "/signin"} 
            className='button'>{userInfo.name ? 'Sign Out' : 'Sign In/Register'}
          </NavLink>
        </div>
      </div>
    </div>
  )
}