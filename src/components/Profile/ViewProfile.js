import React, { useState, useEffect } from 'react';
import { Spin, Icon } from 'antd';
import face from '../../assets/face.png';

export default function ViewProfile({ info, setInfo }){
  const antIcon = <Icon 
    type="loading" 
    style={{ fontSize: 24, color: '#20bf55' }}
     spin />;


  useEffect(() => {
    const userInfo = localStorage.getItem('user_info');
    if(userInfo){
      setInfo(JSON.parse(userInfo));
    }
  }, []);

  return(
    <div className='profile-view'>
      {
        info.name ?
          (
          <>
            <div className='image-box'>
              <img src={info.image ? info.image : face} alt='user' />
            </div>
            <div><h3>Name</h3>
            <h4>{info.name}</h4></div>
            <div><h3>Phone Number</h3>
            <h4>{info.phone_number}</h4></div>
            <div><h3>Email</h3>
            <h4>{info.email}</h4></div>
            <div><h3>Date Of Birth</h3>
            <h4>{info.date_of_birth.split('T')[0]}</h4></div>
            <div><h3>Address</h3>
            <h4>{info.address}</h4></div>
          </>
          ) : <Spin indicator={antIcon} />
      }
    </div>
  )
}