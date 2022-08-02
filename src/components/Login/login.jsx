import userIcon from '../../assets/img/userIcon.png'
import emailIcon from '../../assets/img/email_icon.png'
import lockIcon from '../../assets/img/lock_icon.png'
import { useState } from "react";

const Login = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    
  return (
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-img">
                <img src={userIcon} alt="user icon" className="profile" />
              </div>
            </div>

            <div>
              <h1 className="connect">Connect with other musicians around the world</h1>
              <div>
                <img src={emailIcon} alt="email icon" className="input-icons" />
                <input type="text" placeholder="username" className="name" />
              </div>
              <div className="second-input">
                <img
                  src={lockIcon}
                  alt="password icon"
                  className="input-icons"
                />
                <input type="password" placeholder="password" className="name" />
              </div>
              <div className="login-button">
                <button className="login-button">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login; 