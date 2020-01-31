import React from 'react';
import { NavLink } from 'react-router-dom';

export default function footer(){
  
  return (<>
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">LinkUp</h1>
            
        <h2>Contact</h2>
        
        <address>
          900271 Maitama Abuja, Nigeria <br></br>
              
          <NavLink className="footer__btn" to="mailto:example@linkup.com">Email Us</NavLink>
        </address>
      </div>
  
    <ul className="footer__nav">
      <li className="nav__item">
        <h2 className="nav__title">Media</h2>

        <ul className="nav__ul">
          <li>
            <NavLink to="#">Online</NavLink>
          </li>

          <li>
            <NavLink to="#">Print</NavLink>
          </li>
              
          <li>
            <NavLink to="#">Alternative Ads</NavLink>
          </li>
        </ul>
      </li>
      
      <li className="nav__item nav__item--extra">
        <h2 className="nav__title">Technology</h2>
        
        <ul className="nav__ul nav__ul--extra">
          <li>
            <NavLink to="#">Hardware Design</NavLink>
          </li>
          
          <li>
            <NavLink to="#">Software Design</NavLink>
          </li>
          
          <li>
            <NavLink to="#">Digital Signage</NavLink>
          </li>
          
          <li>
            <NavLink to="#">Automation</NavLink>
          </li>
          
          <li>
            <NavLink to="#">Artificial Intelligence</NavLink>
          </li>
          
          <li>
            <NavLink to="#">IoT</NavLink>
          </li>
        </ul>
      </li>
      
      <li className="nav__item">
        <h2 className="nav__title">Legal</h2>
        
        <ul className="nav__ul">
          <li>
            <NavLink to="#">Privacy Policy</NavLink>
          </li>
          
          <li>
            <NavLink to="#">Terms of Use</NavLink>
          </li>
          
          <li>
            <NavLink to="#">Sitemap</NavLink>
          </li>
        </ul>
      </li>
    </ul>
    
    <div className="legal">
      <p>&copy; 2020 LinkUp. All rights reserved.</p>
      
      <div className="legal__links">
        <span>Graphics from freepik.com</span>
      </div>
    </div>
  </footer>
  </>);
}