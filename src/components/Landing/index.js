import React from 'react';
import { Helmet } from 'react-helmet';
import SEO from 'react-seo-component';
import navimage from '../../assets/user.png';
import ctaImage from '../../assets/04.png';

export default function LandingPage() {

  return(
    <>
      <SEO
        title={'LinkUp'}
        description={'Cards for All!'}
        image={navimage}
        pathname={'/'}
        siteLanguage={'en'}
        siteLocale={'en_gb'}
        twitterUsername={'linkup'}
      />
      <Helmet>
        <title>{`LinkUp - Cards for All!`}</title>
      </Helmet>
      <div className='cta-area'>
        <div className='cta-image'>
          <img src={ctaImage} alt='alt-cta' />
        </div>
        <div className='cta-text'>
          <h2>
            Create Your Custom Profile
          </h2>
          <p>
          Definition of profile. (Entry 1 of 2) 1 : a representation of 
          something in outline especially : a human head or face represented 
          or seen in a side view. 2 : an outline seen or represented in sharp 
          relief : contour. 3 : a side or sectional elevation: such as.
          </p>
        </div>
      </div>
    </>
  );
}