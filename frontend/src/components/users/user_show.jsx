import React from 'react';
import {Link} from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props){
        super(props);
        debugger;
    }

    componentDidMount(){
        debugger;
        if (this.props.currentUser) {
            this.props.fetchUser(this.props.currentUser.id)
        };
        debugger;
    }

    render() {
        debugger;
        const languages = {};

        if (this.props.currentUser === undefined) {
            return <> </>

        } else {
        
            const age = new Date().getFullYear() - parseInt(this.props.currentUser.birthDate.split("-")[0]);
      
            return( 
            <div className="user-show-master">
                <div className="user-show-content">
                    <span>
                        <h1>My Profile</h1>
                        <Link to={`/edit`}>
                            <button className='edit-btn'>Edit</button>
                        </Link>
                    </span>
                      <span>
                        <h3>Name:</h3> 
                        <p>{this.props.currentUser.name}</p>
                    </span>
                    <span>
                        <h3>Age: </h3>
                        <p>{age}</p>
                    </span>
                    <span>
                        <h3>Language/Framework: </h3>
                        <p>{this.props.currentUser.language}</p>
                    </span>
                    <span>
                        <h3>Pronouns: </h3>
                        <p>{this.props.currentUser.pronouns}</p>
                    </span>
                    <span>
                        <h3>Goal:  </h3>
                        <p>{this.props.currentUser.goal}</p>
                    </span>
                    <span>
                        <h3>Experience: </h3>
                        <p>{this.props.currentUser.experience}</p>
                    </span>
                </div>
            </div>
            );
        
            }
        };
};

export default UserShow;