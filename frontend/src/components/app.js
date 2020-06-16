import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPageContainer from './splash/splash_page_container';
<<<<<<< HEAD
import UserShowContainer from './user/user_show_container';
=======
import UserShowContainer from './users/user_show_container';
>>>>>>> 4d45d4ea75c01f1e3a1e633a3b6dac4040b8a077


const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            <Route exact path="/" component={SplashPageContainer} />
<<<<<<< HEAD
            <Route path="/users/:userId" component={UserShowContainer}/>
=======
            <ProtectedRoute path='/show' component={UserShowContainer}/>
>>>>>>> 4d45d4ea75c01f1e3a1e633a3b6dac4040b8a077
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;