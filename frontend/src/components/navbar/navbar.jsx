import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className="nav-bar">
        <button className="navbar-back-to-home-button">
          Home
        </button>
        <h6>hr</h6>
      </div>
    );
  }
}

export default NavBar;