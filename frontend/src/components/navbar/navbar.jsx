import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  notification(){
    debugger
    if (this.props.currentUser === undefined) {
    return(
      <>
      </>
    )
  } else if (this.props.currentUser.likes === 0) {
    return (
      <h3 className="zero-notifications">
        0
        <div className="no-content">
          <h5>You have no likes yet. Get out there!</h5>
          <img
            src="http://localhost:3000/images/emo_character.png"
            alt=""
            height="60"
            width="200"
          />
        </div>
      </h3>
    );
  } else {
    return <h3 className="some-notificaitons">
      ✔️
      <div className="with-likes">

      </div>
      </h3>;
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
          <li className="notification-list-item">
            {this.notification()}

          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;