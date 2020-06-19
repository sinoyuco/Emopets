import React from 'react';
import { AuthRoute, ProtectedRoute, EditRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPageContainer from './splash/splash_page_container';
import UserShowContainer from './users/user_show_container';
import PlayContainer from './play/play_container'
import EditFormContainer from './users/edit_form_container'
import NotificationsContainer from './notifications/notification_container';
import TeamShow from './team/team';



const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={SplashPageContainer} />
            <Route exact path="/team" component={TeamShow} />
            <ProtectedRoute exact path="/play" component={PlayContainer} />
            <ProtectedRoute path='/show' component={UserShowContainer}/>
            <ProtectedRoute path='/notifications' component={NotificationsContainer}/>
            <EditRoute path='/edit' component={EditFormContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;