import React from 'react';

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const user = this.props.user;
        return(
            <div className="user-show-profile">
                <li>{user.name}</li>
                {/* <li>{user.}</li>
                <li>{user.}</li>
                <li></li> */}
            </div>
        )
    }


}

export default UserShow;