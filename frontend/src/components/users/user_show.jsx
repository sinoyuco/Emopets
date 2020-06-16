import React from 'react';

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     //
    // }

    render() {
        const age = new Date().getFullYear() - parseInt(this.props.currentUser.birthDate.split("-")[0]);
        return( 
        <div className="user-show-master">
            <div className="user-show-content">
                    <h3><strong>Name</strong>: {this.props.currentUser.name}</h3>
                    <h3><strong>Language:</strong> {this.props.currentUser.language}</h3>
                    <h3><strong>Goal: </strong> {this.props.currentUser.goal}</h3>
                    <h3><strong>Experience:</strong> {this.props.currentUser.experience}</h3>
                    <h3><strong>Age:</strong> {age}</h3>
                    <h3><strong>Pronouns:</strong> {this.props.currentUser.pronouns}</h3>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        </div>
        );
    }
};

export default UserShow;