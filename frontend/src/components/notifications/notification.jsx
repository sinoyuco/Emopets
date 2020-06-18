import React from 'react';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillUnmount() {

    // }

    

    componentDidMount() {

        this.props.fetchNotifications(this.props.currentUser.id);
        this.props.fetchUsers();

    }

    render() {


        if (this.props.notifications.length > 0 && Object.values(this.props.users).length > 0) {

            return (
    
                this.props.notifications.map((notif, idx) => {
 
                    return (
                        <>
                            <h1>TEST</h1>
                            <h1>TEST</h1>
                            <h1>TEST</h1>
                            <h1>TEST</h1>
                            <p key={idx}>You've matched with {this.props.users[notif.matched_with].name}</p>
                            <p>Contact your pair via email: {this.props.users[notif.matched_with].email}</p>
                        
                        </>
                        )
                    })
             )
        } else if (Object.values(this.props.users).length > 0 && this.props.notifications.length === 0) {
            return(
                <>
            <h1> Sorry you don't have any notifications :(</h1>
            <h1> Sorry you don't have any notifications :(</h1>
            <h1> Sorry you don't have any notifications :(</h1>
            <h1> Sorry you don't have any notifications :(</h1>
            <h1> Sorry you don't have any notifications :(</h1>
            <h1> Sorry you don't have any notifications :(</h1>
            <h1> Sorry you don't have any notifications :(</h1>
            <h1> Sorry you don't have any notifications :(</h1>
            </>)
        } else {
            return <></>
        }
};
}
export default Notifications;