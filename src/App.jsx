import './App.css';
import Login from './components/Login/login'
import Popup from './components/Popup/popup'
import {useState} from 'react'

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <div className="App">
      <Login></Login>
      <div>
        <p className="link">
          <a href="#">Forget password?</a> or{" "}
          <a onClick={() => setButtonPopup(true)}>New? Register here</a>
        </p>
      </div>
      <div className='empty'></div>
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

export default App;
