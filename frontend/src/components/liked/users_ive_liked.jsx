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
        if (usersObj[notif.matched_with]) {
          return usersObj[notif.matched_with].name
        }
      }
  
      )
      return matches;

      // debugger
    }
  }

  render(){

    // if (Object.values(this.props.notifications).length === 0 && Object.values(this.props.likes).length === 0) {
    if (this.findLikes() === undefined || !this.findLikes()) {
      
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
      
      return (
        <div className="notifications-background">
          <div
            className="yes-notifications-container"
            style={{ height: `350px` }}
          >
            <div>
              <i className="far fa-smile fa-9x"></i>
              <h1 style={{ marginTop: "50px" }}>Below are your likes!</h1>
              <div className="notification-list-container">
                {/* {this.notificationList()} */}
                <div
                  className="notification-list-item-notif"
                  style={{ display: "flex" }}
                  style={{ flexDirection: "row" }}
                  style={{ padding: "20px" }}
                  style={{
                    justifyContent: "space-between",
                    background: "transparent",
                  }}
                >
                  <div className="name-likes" style={{ fontSize: "20px" }}>
                    Name
                  </div>
                  <div
                    className="status-likes"
                    style={{ paddingRight: "10px" }}
                    style={{ fontSize: "20px" }}
                  >
                    Status
                  </div>
                </div>
                {this.findLikes()
                  .filter((value) => this.findMatches().includes(value))
                  .map((val) => (
                    <div
                      style={{ display: "flex" }}
                      style={{ flexDirection: "row" }}
                      style={{ padding: "20px" }}
                      style={{ justifyContent: "space-between" }}
                      className="notification-list-item-notif"
                    >
                      <div className="name-likes">{val}</div>
                      <p style={{ paddingRight: "10px", color: "#39CCCC" }}>
                        MATCHED
                      </p>
                    </div>
                  ))}
                {this.findLikes()
                  .filter((value) => !this.findMatches().includes(value))
                  .map((val) => (
                    <div
                      className="notification-list-item-notif"
                      style={{ display: "flex" }}
                      style={{ flexDirection: "row" }}
                      style={{ padding: "20px" }}
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="name-likes">{val}</div>
                      <div
                        className="status"
                        style={{ paddingRight: "10px", color: "#FF4500" }}
                      >
                        PENDING
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      );

            //  return (
            //    <div>
            //      <br />
            //      <br />
            //      <br />
            //      <br />
            //      <br />I hope this works!
            //      <h1>TEST</h1>
            //      <h1>TEST</h1>
            //      <h1>TEST</h1>
            //      <h1>TEST</h1>
            //      <h1>
            //        {(this.findLikes().filter(value => this.findMatches().includes(value))).map(val => (
            //          <span>
            //            <p>{val}</p>
            //           <p>MATCHED</p>
            //          </span>

            //        ))}
            //      </h1>
            //      <h1>
            //        {(this.findLikes().filter(value => !this.findMatches().includes(value))).map(val => (
            //          <span>
            //            <p>{val}</p>
            //           <p>PENDING</p>
            //          </span>

            //        ))}
            //      </h1>
            //      <h1>TEST</h1>
            //    </div>
            //  );
           } else {
             return <></>
           }
  }
}

export default UsersIveLiked;