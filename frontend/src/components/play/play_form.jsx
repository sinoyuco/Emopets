import React from 'react';
import PlayItem from './play_item'

class Play extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
        this.updateCards = this.updateCards.bind(this);
    }

    updateCards(e) {
        this.setState({search: e.target.value})
    }


    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchLikes(this.props.currentUser.id);
    }

    render() {
        debugger;
        let usersSome
        // const likes = this.props.likes
        if (this.state.search.length) {
            usersSome = this.props.users.filter(
                user => (
                    user.language === this.state.search
                )
            )
        } else if (this.state.search.length === 0) {
            usersSome = this.props.users
        }
        if (this.props.users.length) {
            return(
                <div className="cards-container">
                    <div className="card-container">
                        {
                            usersSome.map(user => (
                                <PlayItem 
                                    user={user}
                                    key={user.id}
                                    postLike={this.props.postLike}
                                />
                            ))
                        }
                    </div>
                    <div className="language-options">
                        <input type="checkbox" className="language-option" value='Ruby' onChange={this.updateCards}/>Ruby
                        <input type="checkbox" className="language-option" value='Rails' onChange={this.updateCards}/>Rails
                        <input type="checkbox" className="language-option" value='React' onChange={this.updateCards}/>React
                        <input type="checkbox" className="language-option" value='Javascript' onChange={this.updateCards}/>Javascript
                        <input type="checkbox" className="language-option" value='Node.js' onChange={this.updateCards}/>Node.js
                        <input type="checkbox" className="language-option" value='HTML' onChange={this.updateCards}/>HTML
                        <input type="checkbox" className="language-option" value='CSS' onChange={this.updateCards}/>CSS
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Play;