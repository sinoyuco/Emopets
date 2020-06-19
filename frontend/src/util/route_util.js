
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { fetchUsers } from '../actions/user_actions'

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/show/" />
            )
    )} />
);


const Edit = ({ component: Component, path, users, currentUser, fetchUsers, exact }) => (
    <Route path={path} exact={exact} render={(props) => {
        debugger
        // fetchUsers();
        // debugger; 
        
        return (
            users[currentUser.id] !== currentUser ? (
                    <Component {...props} />
                
            ) : (
                    <Redirect to = "/show" />
                  
                )
                
                )
            }} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        }
    />
);

const mapStateToProps = state => {
    debugger;
    return ({ 
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        users: state.users })
};

const mDTP = dispatch => {
    return ({
        fetchUsers: () => dispatch(fetchUsers())
    })
}
export const AuthRoute = withRouter(connect(mapStateToProps, mDTP)(Auth));
export const EditRoute = withRouter(connect(mapStateToProps, mDTP)(Edit));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));