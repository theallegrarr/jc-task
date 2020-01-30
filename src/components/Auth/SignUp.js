import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import * as auth from './authHelper';
import { Spin, Icon, message, DatePicker } from 'antd';
import UploadImage from './UploadBox';

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 2,
      maximum: 64,
    },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      minimum: 4,
      maximum: 128,
    },
  },
  phone_number: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 6,
      maximum: 128,
    },
  },
  address: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 6,
      maximum: 128,
    },
  },
  date_of_birth: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  security_answer_1: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
      maximum: 128,
    },
  },
  security_answer_2: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
      maximum: 128,
    },
  },
  security_answer_3: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
      maximum: 128,
    },
  },
};

export default function SignUpForm({ props }) {
  const [ form, setForm ] = useState({
    name: '',
    phone_number: 0,
    address: '',
    email: '',
    date_of_birth: new Date(),
    security_answer_1: '',
    security_answer_2: '',
    security_answer_3: ''
  });
  const [errorState, setErrors] = useState({
    touched: {}
  });
  const [ loading, setLoading ] = useState(false);

  const updateForm = (key, value) => {
    setForm({ 
    ...form, 
    [key]: value, 
    });

    setErrors({
      ...errorState,
      touched: {
        ...errorState.touched,
        [key]: true
      }
    })
  }
  const onChange = (date, dateString) => {
    setForm({ ...form, date_of_birth: new Date(dateString) });
  }
  useEffect(() => {
    const errors = validate(form, schema);

    setErrors(errorState => ({
      ...errorState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [form])

  const hasError = field => !!(errorState.touched[field] && errorState.errors[field]);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const user = await auth.register(form, props);
      if(user.result) {
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
  const antIcon = <Icon 
    type="loading" 
    style={{ fontSize: 24, color: '#fff' }} spin />;

  return(
    <div className='form-container'>
      <label>Name </label>
      <input 
        name='name'
        onChange={(e) => updateForm('name', e.target.value)} >
      </input>
      {
        hasError('name') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.name[0]}</p> : null
      }
      <label>Phone Number </label>
      <input 
        name='phone_number'
        onChange={(e) => updateForm('phone_number', e.target.value)} >
      </input>
      {
        hasError('phone_number') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.phone_number[0]}</p> : null
      }
      <label>Address </label>
      <input 
        name='address'
        onChange={(e) => updateForm('address', e.target.value)} >
      </input>
      {
        hasError('address') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.address[0]}</p> : null
      }
      <label>E-mail </label>
      <input 
        name='email'
        onChange={(e) => updateForm('email', e.target.value)} >
      </input>
      {
        hasError('email') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.email[0]}</p> : null
      }
      <label>Password </label>
      <input 
        name='password'
        type='password'
        onChange={(e) => updateForm('password', e.target.value)} >
      </input>
      {
        hasError('password') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.password[0]}</p> : null
      }
      <label>Date of Birth </label>
      <DatePicker onChange={onChange} />
      {
        hasError('date_of_birth') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.date_of_birth[0]}</p> : null
      }
      <label>Security Question 1: What is your pet name? </label>
      <input 
        name='security_answer_1'
        onChange={(e) => updateForm('security_answer_1', e.target.value)} >
      </input>
      {
        hasError('security_answer_1') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.security_answer_1[0]}</p> : null
      }
      <label>Security Question 2: What is your birth town? </label>
      <input 
        name='security_answer_2'
        onChange={(e) => updateForm('security_answer_2', e.target.value)} >
      </input>
      {
        hasError('security_answer_2') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.security_answer_2[0]}</p> : null
      }
      <label>Security Question 3: What is the favorite color? </label>
      <input 
        name='security_answer_3'
        onChange={(e) => updateForm('security_answer_3', e.target.value)} >
      </input>
      {
        hasError('security_answer_3') ? <p style={{ color: 'hsla(359,98%,68%,1)' }}>{errorState.errors.security_answer_3[0]}</p> : null
      }
      <UploadImage />
      <div className='form-buttons'>
        <button
          disabled={Object.size(errorState.errors) > 0 ? true : false }
          onClick={handleSubmit}
        >{loading && <Spin indicator={antIcon} />}{' '}Register</button>
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