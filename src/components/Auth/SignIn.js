import React, { useState, useEffect } from 'react';
import validate from 'validate.js';

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

export default function SignInForm() {
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
      <label type='password'>Password </label>
      <input
        name='password'
        onChange={(e) => updateForm('password', e.target.value)}
      >
      </input>
      {
        hasError('password') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.password[0]}</p> : null
      }
      <div className='form-buttons'>
        <button
          disabled={Object.size(errorState.errors) > 0 ? true : false }
        >Sign In</button>
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