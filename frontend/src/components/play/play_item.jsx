import React from 'react';

class PlayItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { language, goal, name, experience, birthDate, pronouns} = this.props.user
        const birth = birthDate.split('-')
        const fixedBirth = [birth[0],birth[1],birth[2].slice(0,2)].join('/') // birthdate formatting
        return(
            <div className="main-card">
                <div className="thecard">
                    <div className="thefront">
                        <img src={`http://localhost:3000/images/${language}-front-card.png`} />
                    </div>
                    <div className="theback">
                        <div className="card-profile-picture">
                            <img src={`http://localhost:3000/images/${language}-back-card.png`} />
                        </div>
                        <div className="card-profile-bottom">
                            <div className="card-profile-bottom-header">
                                <div className="profile-name">{name}</div>
                                <div>{fixedBirth}</div>
                            </div>
                            <div className="card-profile-bottom-middle">
                                <div className="profile-language">
                                    <label>Language</label>
                                    {language}
                                </div>
                                <div className="profile-pronouns">
                                    <label>Pronouns</label>
                                    {pronouns}
                                </div>
                            </div>
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
                            <div className="card-profile-bottom-footer">
                                <button>No</button>
                                <button>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayItem;