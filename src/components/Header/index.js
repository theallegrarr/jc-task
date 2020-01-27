import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/user.png';

export default function NavBar() {

  return(
    <div className='head-container'>
      <div className='nav-bar'>
        <div className='nav-image'>
          <NavLink to="/" className=''>
            <img src={logo} alt='site-logo' />
          </NavLink>
        </div>
        <div className='nav-links'>
          <NavLink to="/profile" className='a'>Profile</NavLink>
          <NavLink to="/signin" className='button'>Sign In/Register</NavLink>
        </div>
      </div>
    </div>
  )
}