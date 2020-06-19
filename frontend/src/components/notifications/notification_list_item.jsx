import React from 'react'


//props.users[props.notif.matched_with].language

export const NotificationListItem = (props) => {
  //debugger;
  const newBanner = ((props.notif.type === 'unseen') ? <div className="new-banner-container"><p className="new-banner-message">new</p></div> : null);
  return(
    <div className="notification-list-item-notif">
      <img src={`/images/${props.users[props.notif.matched_with].language}-back-card.png`} className="list-item-image"/>
      <p style={{ margin: "15px" }}>You've matched with {props.users[props.notif.matched_with].name}</p>
      <p style={{ margin: "0px" }}>email: {props.users[props.notif.matched_with].email}</p>
      {newBanner}
    </div>
  )
}









