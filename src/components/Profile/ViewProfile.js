import React, { useState, useEffect } from 'react';
import { Spin, Icon } from 'antd';
import face from '../../assets/face.png';

export default function ViewProfile(){
  const [details, setDetails] = useState({});
  const antIcon = <Icon 
    type="loading" 
    style={{ fontSize: 24, color: '#20bf55' }}
     spin />;


  useEffect(() => {
    const userInfo = localStorage.getItem('user_info');
    if(userInfo){
      setDetails(JSON.parse(userInfo));
    }
  }, []);

  return(
    <div className='profile-view'>
      {
        details.name ?
          (
          <>
            <div className='image-box'>
              <img src={face} alt='user' />
            </div>
            <div><h3>Name</h3>
            <h4>{details.name}</h4></div>
            <div><h3>Phone Number</h3>
            <h4>{details.phone_number}</h4></div>
            <div><h3>Email</h3>
            <h4>{details.email}</h4></div>
            <div><h3>Date Of Birth</h3>
            <h4>{details.date_of_birth.split('T')[0]}</h4></div>
            <div><h3>Address</h3>
            <h4>{details.address}</h4></div>
          </>
          ) : <Spin indicator={antIcon} />
      }
    </div>
  )
}