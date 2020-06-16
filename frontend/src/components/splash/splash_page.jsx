import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers()

  }


  render() {
    return (
      <div className="entire-splash">
        <div className="top-of-splash">
          <img
            className="splash-logo"
            src="http://localhost:3000/images/main_logo.png"
            alt="My_Logo"
          />
        </div>

        <div className="signup-and-excel">
          <div className="splash-make-profile signup-list-item">
            Create a profile
            <img
              className="signup-and-excel-picture"
              src="http://localhost:3000/images/createprofile.png"
              alt="Sign_up"
            />
          </div>

          <div className="splash-edit-profile signup-list-item">
            <img
              className="signup-and-excel-picture"
              src="http://localhost:3000/images/language.png"
              alt="My_Logo"
            />
            Add the language you'd like to practice
          </div>

          <div className="splash-celebrate signup-list-item">
            Make friends and learn new things
            <img
              className="signup-and-excel-picture"
              src="http://localhost:3000/images/highfive.png"
              alt="My_Logo"
            />
          </div>
        </div>

        <button className="splash-signup-now-button">
          Start Pairing Now!
        </button>
      </div>
    );
    
  }

}


export default withRouter(SplashPage);