import React from 'react';

class Notifications extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        this.props.fetchLikes(this.props.currentUser.id)
        debugger;
    }

    render() {
        debugger;
        return (
        <>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
        </>
        )
    }
};


export default Notifications;