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
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [pw, setPw] = useState("");
  const [user, setUser] = useState("");
  const [signuperr, setSignuperr] = useState(false)

  

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log("whats up")
    axios.post('/login', { email, password })
      .then((res) => {
        console.log("waz up")
        localStorage.setItem("user_profile", JSON.stringify(res.data[0][0]));
        console.log(res.data)
        localStorage.setItem("email", res.data[0][0].email);
        props.loggedIn()
      })
      .catch((err) => {
        setError(err)
    })
  }
  const validate = () => {
    const errors = {};
    if (firstname === "") {
      errors.firstname = setSignuperr(true);
      setButtonPopup(true);
    }
    if (lastname === "") {
      errors.lastname = setSignuperr(true);
      setButtonPopup(true);
    }
    if (user === "") {
      errors.email = setSignuperr(true);
      setButtonPopup(true);
    }
    if (pw === "") {
      errors.password = setSignuperr(true);
      setButtonPopup(true);
    }
    return errors;
  };

  const postUser = async (e) => {
    e.preventDefault()
    let errors = await validate();
    console.log(errors)
    if (Object.keys(errors).length === 0) {
      axios
        .post("/popup", { firstname, user, pw, lastname })
        .then((res) => {
          localStorage.setItem("user_profile", res.data[0][0].id);
          localStorage.setItem("email", res.data[0][0].email);
          console.log(res.data)
          setSubmitted(true);
          setButtonPopup(false);
        })
        .catch((err) => {
          setSignuperr(err);
        });
    }
    
  }
  
  return (
    <div className="main">
      {error ? (
        <div className="login-error">
          <div className="error-inner">
            <img src="" alt="" />
            <h1 className="error-message">Invalid Username & Password</h1>
            <p className="X" onClick={() => setError(false)}>
              Try Again
            </p>
          </div>
        </div>
      ) : null}
      {signuperr ? (
        <div className="login-error">
          <div className="error-inner">
            <img src="" alt="" />
            <h1 className="error-message">
              Please Enter in all required fields
            </h1>
            <p className="X" onClick={() => setSignuperr(false)}>
              Try Again
            </p>
          </div>
        </div>
      ) : null}
      {submitted ? (
        <div className="login-error">
          <div className="error-inner">
            <img src="" alt="" />
            <h1 className="error-message">Thank you for signing up</h1>
            <p className="X" onClick={() => props.loggedIn()}>
              Login Now
            </p>
          </div>
        </div>
      ) : null}
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
        <form onSubmit={postUser}>
          <h3>Register</h3>
          <p>First Name:</p>
          <input
            type="text"
            className="fNameForm"
            onChange={({ target }) => setFirstname(target.value)}
          />
          <p>Last Name:</p>
          <input
            type="text"
            className="lNameForm"
            onChange={({ target }) => setLastname(target.value)}
          />
          <p>Email:</p>
          <input
            type="email"
            className="emailForm"
            onChange={({ target }) => setUser(target.value)}
          />
          <p>Password:</p>
          <input
            type="password"
            className="pwForm"
            onChange={({ target }) => setPw(target.value)}
          />
          <br className="space" />
          <div className="button-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </Popup>
    </div>
  );
}

export default Login; 