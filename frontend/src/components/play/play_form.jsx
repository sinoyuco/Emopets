import React from 'react';
import PlayItem from './play_item'

class Play extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: []
        }
        this.updateCards = this.updateCards.bind(this);
    }

    updateCards(e) {
        let box = Array.from(document.getElementsByClassName("language-option"))
        let filtered = []
        box.forEach(ele => {
            if (ele.checked) {
                filtered.push(ele.value)
            }
        })
        this.setState({ search: filtered }) 
    }


    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchLikes(this.props.currentUser.id);
    }

    render() {
        debugger;
        const liked = this.props.likes.filter(like => (like['type']==='like')).map(like => like['liked']);
        const disliked = this.props.likes.filter(like => (like['type'] === 'dislike')).map(like => like['liked']);

        debugger;
        if (this.props.users.length) {
            let usersSome
                if (this.state.search.length) {
                    usersSome = this.props.users.filter(user => (!liked.includes(user._id)) && (!disliked.includes(user._id)) && (this.props.currentUser.email !== user.email) && (this.state.search.includes(user.language)));
                } else if (this.state.search.some(ele => !ele.checked) || this.state.search.length === 0) {
                    usersSome = this.props.users.filter(user => (!liked.includes(user._id)) && (!disliked.includes(user._id)) && (this.props.currentUser.email !== user.email));
                }

            let display
            if (usersSome.length) {
                display = <ul className="card-container">
                                {
                                    usersSome.map(user => (
                                        <PlayItem 
                                             user={user}
                                             key={user._id}
                                             postLike={this.props.postLike}
                                        />
                                    ))
                                }
                        </ul>
            } else {
                display = <div className="no-cards">
                              <p>There is no more users that you haven't liked already...</p>
                        </div>
            }
            return(
                <div className="cards-container">
                    {display}
                    <div className="language-options">
                        <label><input type="checkbox" id="check" className="language-option" value="Ruby" onChange={this.updateCards} />Ruby</label>
                        <label><input type="checkbox" id="check" className="language-option" value="Rails" onChange={this.updateCards} />Rails</label>
                        <label><input type="checkbox" id="check" className="language-option" value="React" onChange={this.updateCards} />React</label>
                        <label><input type="checkbox" id="check" className="language-option" value="Javascript" onChange={this.updateCards} />Javascript</label >
                        <label><input type="checkbox" id="check" className="language-option" value="Node.js" onChange={this.updateCards} />Node.js</label >
                        <label><input type="checkbox" id="check" className="language-option" value="HTML" onChange={this.updateCards} />HTML</label >
                        <label><input type="checkbox" id="check" className="language-option" value="CSS" onChange={this.updateCards} />CSS</label >
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Play;