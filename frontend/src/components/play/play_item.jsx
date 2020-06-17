import React from 'react';

class PlayItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
    }
    

    handleLike(e){
        e.preventDefault();
        this.props.postLike(this.props.user._id);
    }

    // handleDislike(e){
    //     e.preventDefault();
    //     // pluck this user out of users and rerender on play level.
    // }

    birthHandler(date) {
        if (this.props.user) {
            const birth = this.props.user.birthDate.split('-')
            return [birth[0], birth[1], birth[2].slice(0, 2)].join('/')
        }
    }

    render() {
        if (this.props.user) {
            const { language, goal, name, experience, birthDate, pronouns} = this.props.user
            const fixedBirth = this.birthHandler(birthDate)
            return(
                <div className="main-card">
                    <div className="thecard">
                        <div className="thefront">
                            <img src={`/images/${language}-front-card.png`} />
                        </div>
                        <div className="theback">
                            <div className="card-profile-picture">
                                <img src={`/images/${language}-back-card.png`} />
                            </div>
                            <div className="card-profile-bottom">
                                <div className="card-profile-bottom-header">
                                    <div className="profile-name">{name}</div>
                                    <div className="profile-age">{fixedBirth}</div>
                                </div>
                                <div className="card-profile-bottom-middle">
                                    <div className="profile-middle-left">
                                        <div className="card-profile-bottom-bottom">
                                            <div className="card-profile-goal">
                                                <label>Goal</label>
                                                <div>{goal}</div>
                                            </div>
                                            <div className="card-profile-exp">
                                                <label>Experience</label>
                                                <div>{experience}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-middle-rigth">
                                        <div className="profile-pronouns">
                                            <label>Pronouns</label>
                                            {pronouns}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-profile-b">
                                    <div className="card-profile-bottom-footer">
                                        <button className="no-btn"><i className="far fa-times-circle"></i></button>
                                        <button onClick={this.handleLike} className="yes-btn"><i className="far fa-check-square"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default PlayItem;