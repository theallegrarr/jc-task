import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import AuthForm from './components/Auth';
import 'antd/dist/antd.css';
import './css/index.css';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Route 
        exact path='/'
        render={props => {
            return (<Landing {...props}/>)
        }} />
      <Route 
        exact path='/signin'
        render={props => {
            return (<AuthForm {...props}/>)
        }} />
      <Footer />
    </div>
  );
}

export default App;
