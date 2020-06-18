import React from 'react';
import {Link} from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props){
        super(props);
        this.goPlay = this.goPlay.bind(this);
        this.edit = this.edit.bind(this);
    }

    componentDidMount(){
        debugger
        if (this.props.currentUser) {
            this.props.fetchUser(this.props.currentUser.id)
        };
    }

    goPlay() {
        this.props.history.push('/play')
    }

    edit() {
        this.props.history.push('/edit/:id')
    }

    render() {
        debugger
        const languages = {};
        if (this.props.currentUser === undefined || this.props.currentUser === null) {
            return <> </>
        } else {
            const {pronouns, language, name, goal, experience} = this.props.currentUser;
            const age = new Date().getFullYear() - parseInt(this.props.currentUser.birthDate.split("-")[0]);
            return( 
            <div className="user-show-master">
                {/* <img src="/images/computer1.gif"/> */}
                    <video autoPlay muted loops src="/images/video.mp4" ></video>
                <div className="user-show-content">
                    <div className="background-profile-picture">
                        <img src={`/images/${language}-back-card.png`}/>
                    </div>
                    <div className="profile-info">
                        <div className="profile-header">
                            <div className="prof-name">
                                <label>Name</label>
                                {this.props.currentUser.name}
                            </div>
                            <div className="prof-birth">
                                <label>Age</label>
                                {age}
                            </div>
                        </div>
                        <div className="profile-middle">
                            <div className="middle-left">
                                <div className="prof-exp">
                                    <label>Experience</label>
                                    {this.props.currentUser.experience}
                                </div>
                                <div className="prof-goal">
                                    <label>Goal</label>
                                    {this.props.currentUser.goal}
                                </div>
                            </div>
                            <div className="middle-right">
                                <div className="prof-language">
                                        <label>Language</label>
                                    {this.props.currentUser.language}
                                    </div> 
                                <div className="prof-pronouns">
                                        <label>Pronouns</label>
                                    {this.props.currentUser.pronouns}
                                    </div> 
                            </div>
                        </div>
                        <div className="profile-footer">
                            <button className="play-button" onClick={this.goPlay}>Find a pair</button>
                            <button className="edit-button" onClick={this.edit}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            );
        
            }
        };
};

export default UserShow;