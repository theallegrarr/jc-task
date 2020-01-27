import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
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
    </div>
  );
}

export default App;
