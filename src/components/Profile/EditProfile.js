import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import { Spin, Icon } from 'antd';
import face from '../../assets/face.png';

export default function ViewProfile({ form, setForm, updateForm }){
  const [details, setDetails] = useState({});
  const antIcon = <Icon 
  type="loading" 
  style={{ fontSize: 24, color: '#20bf55' }}
   spin />;

  useEffect(() => {
    const userInfo = localStorage.getItem('user_info');
    if(userInfo){
      setDetails(JSON.parse(userInfo));
      setForm({
        name: JSON.parse(userInfo).name,
        phone_number: JSON.parse(userInfo).phone_number,
        email: JSON.parse(userInfo).email,
        address: JSON.parse(userInfo).address,
        date_of_birth: JSON.parse(userInfo).date_of_birth,
        image: JSON.parse(userInfo).image
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (date, dateString) => {
    setForm({ ...form, date_of_birth: new Date(dateString) });
  }

  return(
    <div className='profile-view'>
      {
        details ?
          (
          <>
            <div className='image-box'>
              <img src={form.image ? form.image : face} alt='user' />
            </div>
            <div><h3>Name</h3>
              <input 
              value={form.name}
              name='name'
              onChange={(e) => updateForm(e.target.name, e.target.value)}
              >
                </input>
              </div>
            <div>
              <h3>Phone Number</h3>
              <input 
                value={form.phone_number}
                name='phone_number'
                onChange={(e) => updateForm(e.target.name, e.target.value)}
                >
                </input></div>
            <div>
              <h3>Email</h3>
              <input
                value={form.email}
                name='email'
                onChange={(e) => updateForm(e.target.name, e.target.value)}
              ></input></div>
            <div>
              <h3>Date Of Birth</h3>
              <DatePicker 
                onChange={onChange}
                placeholder={'select new date(optional)'}
                /></div>
            <div>
              <h3>Address</h3>
              <input 
                value={form.address}
                name='address'
                onChange={(e) => updateForm(e.target.name, e.target.value)}
                >
                </input></div>
          </>
          ) : <Spin indicator={antIcon} />
      }
    </div>
  )
}