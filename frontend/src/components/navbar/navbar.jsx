import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);

    // this.forceUpdate = this.forceUpdate.bind(this)
    // this.handleMouseOver = this.handleMouseOver.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount(){
    this.props.fetchNotifications(this.props.currentUser.id);
  }

  showNav(){
    let dropdown = document.getElementsByClassName("hidden-nav-dropdown")[0]
    dropdown.className ="show-nav-dropdown"
  }

  hideNav(){
    let dropdown = document.getElementsByClassName("show-nav-dropdown")[0]
    dropdown.className ="hidden-nav-dropdown"

  }

  // showNotificationNav() {
  //   let dropdown = document.getElementsByClassName("show-nav-dropdown")[0]
  //   dropdown.className = "hidden-nav-dropdown"
  // }

  // handleClick(e) {
  //   this.forceUpdate()
  // }

  // handleMouseOver(e) {
  //   e.persist();
  //   this.forceUpdate();


  // }

  notification(){
      if (this.props.currentUser === undefined) {
      return(
        <>
        </>
      )

    } else {
      // this.props.fetchNotifications(this.props.currentUser.id);
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

    // } else {
    //     // this.props.fetchNotifications(this.props.currentUser.id);

    //   let top3 = this.props.notifications.slice(0, 2);
    //   // debugger;
    //   //   top3.map((notif, idx) => {

    //       debugger;
    //       return (
            
    //           <h3 id="some-notificaitons"
    //             onMouseEnter={this.showNav}
    //             onMouseLeave={this.hideNav}
    //           >
    //             V
    //             <div className="hidden-nav-dropdown">
    //             {top3.map((notif, idx) => (  
    //               <ul className='match-notifs'>
    //                 <h3>You have a match!</h3>

    //                 <img
    //                   src="/images/emo_character.png"
    //                   alt=""
    //                 />
    //               </ul>
    //             )
    //             )}
                  
    //             </div>
    //           </h3>
            
    //       )
        
      }
  }

 

  logInOrSignUpButton() {
    // this.forceUpdate()
    if (this.props.currentUser === undefined) {
      return (
        <li className="nav-signin-login-buttons">
          <Link to="/login" >
          <button className="navbar-button">Log In</button>
        </Link>

        <Link to="/signup" > 
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
debugger;
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
          <li className="notification-list-item" >
            {this.notification()}

          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;