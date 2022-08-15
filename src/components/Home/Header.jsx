import React from 'react'; 
import { useState } from 'react'
import Navbar from './Navbar'


const Header = (props) => {
     const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
      <header>
        {/* Need to render as tenary saying if login is true then this below won't render */}
        <Navbar loggedIn={props.loggedIn} setLoggedIn ={() => props.setLoggedIn()} />
      </header>
    );
}

export default Header; 