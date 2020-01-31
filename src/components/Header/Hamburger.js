import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Hamburger({ userInfo }) {

  return(
    <div className='menu-box'>
      {
        userInfo.name ? 
          <NavLink to="/profile" className='a'>Profile</NavLink>
          :
          null
      }
      <NavLink 
        to={userInfo.name ? "/signout" : "/signin"} 
        className='button'>{userInfo.name ? 'Sign Out' : 'Sign In/Register'}
      </NavLink>
    </div>
  );
}