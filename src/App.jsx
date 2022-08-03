import React from 'react';
import './App.css'
import Routes from './components/Routes'
import Header from './components/Home/Header'
import Login from './components/Login/login'
import {useState} from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <Header />
          {Routes}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
