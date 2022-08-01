import userIcon from '../../assets/img/userIcon.png'
import emailIcon from '../../assets/img/email_icon.png'
import lockIcon from '../../assets/img/lock_icon.png'


const Login = () => {
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
              <h1>Login</h1>
              <div>
                <img src={emailIcon} alt="email icon" className="input-icons" />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img
                  src={lockIcon}
                  alt="password icon"
                  className="input-icons"
                />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="login-button">
                <button className="login-btn">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login; 