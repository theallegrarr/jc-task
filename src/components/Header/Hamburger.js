import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Hamburger({ userInfo }) {

  return(
    <div className='menu-box'>
      <NavLink to="/profile" className='a'>Profile</NavLink>
      <NavLink 
        to={userInfo.name ? "/signout" : "/signin"} 
        className='button'>{userInfo.name ? 'Sign Out' : 'Sign In/Register'}
      </NavLink>
    </div>
  );
}