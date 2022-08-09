import userIcon from '../../assets/img/userIcon.png'
import emailIcon from '../../assets/img/email_icon.png'
import lockIcon from '../../assets/img/lock_icon.png'
import Popup from '../Popup/popup'
import { useState, useRef } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Login = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("")
  const [errorMessages, setErrorMessages] = useState({})
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    axios.post('/login', { email, password })
      .then((res) => {
      return res.data
    })
  }
  
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-img">
              <img src={userIcon} alt="user icon" className="profile" />
            </div>
          </div>
          <form onSubmit={handleLogin}>
            <div>
              <h1 className="connect">
                Connect with other musicians around the world
              </h1>
              <div>
                <img src={emailIcon} alt="email icon" className="input-icons" />
                <input
                  type="text"
                  value={email}
                  placeholder="email"
                  className="name"
                  onChange={({ target }) => setEmail(target.value)}
                />
                
              </div>
              <div className="second-input">
                <img
                  src={lockIcon}
                  alt="password icon"
                  className="input-icons"
                />
                <input
                  type="password"
                  value={password}
                  placeholder="password"
                  className="name"
                  onChange={({ target }) => setPassword(target.value)}
                />
               
              </div>
              <div className="login-button">
                <button type="submit" className="login-button">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <p className="link">
          <a href="#">Forget password?</a> or{" "}
          <a onClick={() => setButtonPopup(true)}>New? Register here</a>
        </p>
      </div>
      <div className="empty"></div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Register</h3>
        <p>First Name:</p>
        <input type="text" className="fNameForm" />
        <p>Last Name:</p>
        <input type="text" className="lNameForm" />
        <p>Email:</p>
        <input type="text" className="emailForm" />
        <p>Password:</p>
        <input type="password" className="pwForm" />
        <br className="space" />
        <div className="button-container">
          <button className="submit-btn">Submit</button>
        </div>
      </Popup>
    </div>
  );
}

export default Login; 