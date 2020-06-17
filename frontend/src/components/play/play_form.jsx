import React from 'react';
// import PlayItem from './play_item'
import Deck from '../test/test'

class Play extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        if (this.props.users.length) {
            return(
                // <div className="cards-container">
                //     <div className="card-container">
                //         {
                //             this.props.users.map(user => (
                //                 <PlayItem 
                //                     user={user}
                //                     key={user.id}
                //                 />
                //             ))
                //         }
                //     </div>
                // </div>
                <Deck/>
            )
        } else {
            return null;
        }
    }
}

export default Play;