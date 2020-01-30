import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import { Icon } from 'antd';
import logo from '../../assets/user.png';

export default function NavBar({ userInfo }) {
  const [ham, setHam] = useState(false);

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
        <p 
          className='ham-toggle'
          onClick={() => script(setHam)}>
          {ham ? 'X' : <Icon type='menu' />}
        </p>
      </div>
        <Hamburger userInfo={userInfo} />
    </div>
  )
}

function script(setHam){
  const display = document.getElementsByClassName('menu-box')[0].style.display;

  if(display === 'flex') { 
    setHam(false);
    document.getElementsByClassName('menu-box')[0].style.display = 'none';
  } else {
    setHam(true);
    document.getElementsByClassName('menu-box')[0].style.display = 'flex';
  }
}