import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { message } from 'antd';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import AuthForm from './components/Auth';
import Profile from './components/Profile';
import 'antd/dist/antd.css';
import './css/index.css';

function App() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if(localStorage.getItem('user_info')){
      setUserInfo(JSON.parse(localStorage.getItem('user_info')));
    }
  }, []);

  return (
    <div className="main-container">
      <Header userInfo={userInfo} />
      <Route 
        exact path='/'
        render={props => {
            return (<Landing {...props}/>)
        }} />
      <Route 
        exact path='/signin'
        render={props => {
          if(userInfo.name) {
            message.success('you are logged in');
            props.history.push('/profile');
          } else {
            return (<AuthForm setMainInfo={setUserInfo} {...props}/>)
          }
        }} />
      <Route 
        exact path='/signout'
        render={props => {
          if(userInfo.name) {
            localStorage.clear();
            setUserInfo({});
            props.history.push('/signin');
          } else {
            message.error('you are not signed in');
            props.history.push('/signin');
          }
        }} />
      <Route 
        exact path='/profile'
        render={props => {
          if(userInfo.name) {
            return (<Profile {...props}/>)
          } else {
            message.error('you are not logged in');
            props.history.push('/signin');
          }
        }} />
      <Footer />
    </div>
  );
}

export default App;
