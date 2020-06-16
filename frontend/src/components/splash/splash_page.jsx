import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);

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

        
      </div>
    );
    
  }

}


export default withRouter(SplashPage);