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
      <div className="nav-bar">
        <button className="navbar-back-to-home-button">
          Home
        </button>
        {/* <h6></h6> */}
      </div>
    );
  }
}

export default NavBar;