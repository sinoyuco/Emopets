import React from 'react'


//props.users[props.notif.matched_with].language

export const NotificationListItem = (props) => {
  return(
    <div className="notification-list-item-notif"
    >
      <img 
      src={`/images/${props.users[props.notif.matched_with].language}-back-card.png`}
      className="list-item-image"
      />
      <p style={{ margin: "15px" }}>You've matched with {props.users[props.notif.matched_with].name}</p>

      <p>email: {props.users[props.notif.matched_with].email}</p>
    </div>
  )
}









