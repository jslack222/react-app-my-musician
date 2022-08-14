import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Home/Header'
import Login from './components/Login/login'
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import CreateCard from "./components/Create/Create";
import Profile from "./components/Profiles/Profile";


function App() {
  const [userObject, setUserObject] = useState({})
  const [loggedIn, setLoggedIn] = useState(true);
  
  // useEffect(() => {
  // let user = localStorage.getItem("user_profile");
  //   if (!user) {
  //     console.log(user)
  //     let userObj = JSON.parse(user);
  //     setUserObject(userObj); 
  //   }
  // }, [])
  
  function setStatus() {
    setLoggedIn(!loggedIn)
  }


  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/create" element={<CreateCard />}></Route>
            <Route
              path="/myprofile"
              element={<Profile user={userObject} />}
            ></Route>
          </Routes>
        </div>
      ) : (
        <Login loggedIn={setStatus} />
      )}
    </div>
  );
}

export default App;
//props.user to get that object 