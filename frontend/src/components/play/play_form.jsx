import React from 'react';
import PlayItem from './play_item'

class Play extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        debugger
        const usersSome = this.props.users
        if (this.props.users.length) {
            return(
                <div className="cards-container">
                    <div className="card-container">
                        {
                            usersSome.map(user => (
                                <PlayItem 
                                    user={user}
                                    key={user.id}
                                />
                            ))
                        }
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Play;