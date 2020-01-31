import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SEO from 'react-seo-component';
import navimage from '../../assets/user.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function MainForm(props) {
  const [ mode, setMode ] = useState({
    signin: true,
    signup: false,
  });

  const setSignIn = () => setMode({ signin: true, signup: false });
  const setSignUp = () => setMode({ signin: false, signup: true });

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
        <title>{`LinkUp - Sign In/Register`}</title>
      </Helmet>
      <div className='switch'>
        <p 
        onClick={() => setSignIn()}
        style={{
          borderBottom: `${mode.signin ? '3px solid #20bf55' : 'none' }`
        }}>Sign In</p>
        <p 
        onClick={() => setSignUp()}
        style={{
          borderBottom: `${mode.signup ? '3px solid #20bf55' : 'none' }`
        }}>Sign Up</p>
      </div>
      {
        mode.signin ? <SignIn props={props} /> : <SignUp props={props} />
      }
    </>
  );
}