import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  notification(){
    if (this.props.currentUser === undefined) {
    return(
      <>
      </>
    )
  } else if (this.props.currentUser.likes === 0) {
    return(
      <div className="zero-notifications">
        0
      </div>
    )
  } else {
    return (
    <div className="some-notificaitons">
      1
    </div>
    )
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
          ></img>
        </Link>
        <ul>
          <li>
            <Link to="/login">
              <button className="navbar-button">Log In</button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className="navbar-button">Home</button>
            </Link>
          </li>
          <li>
            {this.notification()}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;