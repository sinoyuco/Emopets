import React from 'react';

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return <button onClick={this.props.logout}>Logout</button>
    }
};

export default UserShow;