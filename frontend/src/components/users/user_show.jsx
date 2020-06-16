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
        <h3>{this.props.currentUser.name}</h3>
        <button onClick={this.props.logout}>Logout</button> 
        </div>
        );
    }
};

export default UserShow;