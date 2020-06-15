karl


import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        SPLASH
      </div>
    )

  }


}

export default withRouter(SplashPage);
