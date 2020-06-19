import React from 'react';
import { Link } from 'react-router-dom';


class UsersIveLiked extends React.Component {
  constructor(props){
    super(props)

    this.findMatches = this.findMatches.bind(this);
    this.findLikes = this.findLikes.bind(this);
    this.findPending = this.findPending.bind(this);

  }


  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchLikes(this.props.currentUser.id)
    this.props.fetchNotifications(this.props.currentUser.id);
 
  }

  findPending() {
    if (Object.values(this.props.users).length > 0 && Object.values(this.props.notifications).length > 0 && Object.values(this.props.likes).length > 0) {

      let likes = this.findLikes()
      let matches = this.findMatches()
    debugger
    }

  }

  findLikes() {
    if (Object.values(this.props.users).length > 0 && Object.values(this.props.likes).length > 0) {
      let usersObj = this.props.users
      let usersArr = Object.values(this.props.users)

      let likes = Object.values(this.props.likes).map((like) => {
 

        if (usersObj[like.liked]) {
          return usersObj[like.liked].name
        }
      })
      return likes;
      // debugger
    }


  }

  findMatches() {
    if (Object.values(this.props.users).length > 0 && Object.values(this.props.notifications).length > 0) {
      let usersObj = this.props.users
      let usersArr = Object.values(this.props.users)
  
      let matches = Object.values(this.props.notifications).map((notif) => {
    
        return usersObj[notif.matched_with].name
      }
  
      )
      return matches;

      // debugger
    }
  }

  render(){
debugger
    // if (Object.values(this.props.notifications).length === 0 && Object.values(this.props.likes).length === 0) {
    if (this.findLikes() === undefined || !this.findLikes()) {
      debugger
  return (
        <>
        <h1>GET TO PAIRING</h1>
        <h1>GET TO PAIRING</h1>
        <h1>GET TO PAIRING</h1>
        <h1>GET TO PAIRING</h1>
        <h1>GET TO PAIRING</h1>
        </>
  )
    } else if (this.findLikes()) {
      debugger
             return (
               <div>
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />I hope this works!
                 <h1>TEST</h1>
                 <h1>TEST</h1>
                 <h1>TEST</h1>
                 <h1>TEST</h1>
                 <h1>
                   {(this.findLikes().filter(value => this.findMatches().includes(value))).map(val => (
                     <span>
                       <p>{val}</p>
                      <p>MATCHED</p>
                     </span>

                   ))}
                 </h1>
                 <h1>
                   {(this.findLikes().filter(value => !this.findMatches().includes(value))).map(val => (
                     <span>
                       <p>{val}</p>
                      <p>PENDING</p>
                     </span>

                   ))}
                 </h1>
                 <h1>TEST</h1>
               </div>
             );
           } else {
             return <></>
           }
  }
}

export default UsersIveLiked;