import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  showNav(){
    let notifications = document.getElementById()
  }


  notification(){
      if (this.props.currentUser === undefined) {
      return(
        <>
        </>
      )
    } else if (this.props.currentUser.likes === 0) {
      return (
        <h3 id="zero-notifications"
        onMouseEnter={() => this.showNav()}
        onMouseLeave={() => this.hideNav()}
        >
          0
          <div className="no-content">
            <h5>Nobody likes you!</h5>
            <img
              src="http://localhost:3000/images/emo_character.png"
              alt=""
            />
          </div>
        </h3>
      );
    } else {
      return (
        <h3 id="some-notificaitons">
          ✔️
          <div className="with-likes">
            <h5>Nobody likes you!</h5>
            <img
              src="http://localhost:3000/images/emo_character.png"
              alt=""
            />
          </div>
        </h3>
      );
    }
  }

  logInOrSignUpButton() {
    if (this.props.currentUser === undefined || !this.props.currentUser.id) {
      return (
        <li className="nav-signin-login-buttons">
        <Link to="/login">
          <button className="navbar-button">Log In!</button>
        </Link>

        <Link to="/signup">
          <button className="navbar-button">Sign Up!</button>
        </Link>
        </li>
      );
    } else {
      return (
        <li className="nav-logout-button">
            <button 
            onClick={() => this.props.logout()}
            className="navbar-button">Log Out!</button>
        </li>
      );
    }
  }

  render(){
    return (
      <nav className="nav-bar">
        <Link to="/" style={{ marginRight: "33%" }}>
          <img
            src="http://localhost:3000/images/main_logo_no_text.png"
            alt=""
            height="60"
            width="200"
          />
        </Link>
        <ul>
            {this.logInOrSignUpButton()}
          <li>
            <Link to="/">
              <button className="navbar-button">Home</button>
            </Link>
          </li>
          <li className="notification-list-item">
            {this.notification()}

          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;