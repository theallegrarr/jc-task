import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import './css/index.css';

function App() {
  return (
    <div className="main-container">
      <Header />
    </div>
  );
}

export default App;
