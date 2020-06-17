import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  showNav(){
    let dropdown = document.getElementsByClassName("hidden-nav-dropdown")[0]
    dropdown.className ="show-nav-dropdown"
  }

  hideNav(){
    let dropdown = document.getElementsByClassName("show-nav-dropdown")[0]
    dropdown.className ="hidden-nav-dropdown"
  }


  notification(){
    debugger
      if (this.props.currentUser === undefined) {
      return(
        <>
        </>
      )
    // } else if (this.props.currentUser.likes === undefined) {
      // return (
      //   <h3 id="zero-notifications"
      //   onMouseEnter={this.showNav}
      //   onMouseLeave={this.hideNav}
      //   >
      //     0
      //     <div className="hidden-nav-dropdown">
      //       <h5>Nobody likes you!</h5>
      //       <img
      //         src="/images/emo_character.png"
      //         alt=""
      //       />
      //     </div>
      //   </h3>
      // );
    } else {
      return (
        <h3 id="some-notificaitons"
          onMouseEnter={this.showNav}
          onMouseLeave={this.hideNav}
        >
          V
          <div className="hidden-nav-dropdown">
            <h3>Your Likes Below!</h3>
            <h5>Nobody likes you :(</h5>
            <img
              src="/images/emo_character.png"
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
          <button className="navbar-button">Log In</button>
        </Link>

        <Link to="/signup">
          <button className="navbar-button">Sign Up</button>
        </Link>
        </li>
      );
    } else {
      return (
        <li className="nav-logout-button">
            <button 
            onClick={() => this.props.logout()}
            className="navbar-button">Log Out</button>
        </li>
      );
    }
  }

  render(){
    return (
      <nav className="nav-bar">
        <Link to="/" style={{ marginRight: "33%" }}>
          <img
            src="/images/main_logo_no_text.png"
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