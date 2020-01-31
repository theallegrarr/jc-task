import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import { Spin, Icon, message } from 'antd';
import * as auth from './authHelper';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      minimum: 4,
      maximum: 128,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 6,
      maximum: 128,
    },
  },
}

export default function SignInForm({props}) {
  const [ loading, setLoading ] = useState(false);
  const [ form, setForm ] = useState({
    email: '',
    password: '',
    touched: {},
  });
  const [errorState, setErrors] = useState({});

  const updateForm = (key, value) => setForm({ 
    ...form, 
    [key]: value, 
    touched: {
      ...form.touched,
      [key]: true
    } }); 

  useEffect(() => {
    const errors = validate(form, schema);

    setErrors(errorState => ({
      ...errorState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [form]);

  const hasError = field => !!(form.touched[field] && errorState.errors[field]);
  const antIcon = <Icon 
    type="loading" 
    style={{ fontSize: 24, color: '#fff' }} spin />;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const user = await auth.login(form, props);
      if(user.result) {
        props.setMainInfo(user.result.userInfo);
        props.history.push('/profile');
      } else {
        setLoading(false);
        message.error(user.message);
      }
    } catch (error) {
      setLoading(false);
      message.error('unknown error occurred');
    }
  }

  return(
    <div className='form-container'>
      <label>E-mail </label>
      <input
        name='email'
        onChange={(e) => updateForm('email', e.target.value)}
      >
      </input>
      {
        hasError('email') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.email[0]}</p> : null
      }
      <label>Password </label>
      <input
        name='password'
        type='password'
        onChange={(e) => updateForm('password', e.target.value)}
      >
      </input>
      {
        hasError('password') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.password[0]}</p> : null
      }
      <div className='form-buttons'>
        <button
          disabled={Object.size(errorState.errors) > 0 ? true : false }
          onClick={handleSubmit}
    >{loading && <Spin indicator={antIcon} />}{' '}Sign In</button>
      </div>
    </div>
  )
}

Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};