import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SEO from 'react-seo-component';
import navimage from '../../assets/user.png';
import ctaImage from '../../assets/04.png';
import Features from './Features';

export default function LandingPage() {

  return(
    <>
      <SEO
        title={'LinkUp'}
        description={'~'}
        image={navimage}
        pathname={'/'}
        siteLanguage={'en'}
        siteLocale={'en_gb'}
        twitterUsername={'linkup'}
        titleTemplate={' '}
      />
      <Helmet>
        <title>{`LinkUp - Cards for All!`}</title>
      </Helmet>
      <div className='cta-area'>
        <div className='cta-image' onLoad={() => script()}>
          <img src={ctaImage} alt='alt-cta' />
        </div>
        <div className='cta-text'>
          <h2>
            Create Your
          </h2>
          <h1>
            Custom Profile in Seconds
          </h1>
          
          <p>
            LinkUp allows you to create your very own private profile page, which is only accessible to you and modifiable by you.
          </p>
          {/* <p> 
            This service is tailored for seasoned professionals who would like to keep all their info on one place for reusability and continuous reference
          </p> */}
          <div className='gs-container'>
            <NavLink to="/signin" className='button'>Get Started</NavLink>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
}

function script(){
  setTimeout(function(){
      if(document.getElementsByClassName('cta-image')[0])document.getElementsByClassName('cta-image')[0].style.left = '0';
  }, 2000);
}