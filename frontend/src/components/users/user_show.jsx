import React from 'react';

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     //
    // }

    render() {
        return( 
        <div className="user-show-master">
            <div className="user-show-content">
                <h3>Name: {this.props.currentUser.name}</h3>
                <h3>Language: {this.props.currentUser.language}</h3>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        </div>
        );
    }
};

export default UserShow;