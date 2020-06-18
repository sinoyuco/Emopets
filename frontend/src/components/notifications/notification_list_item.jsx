import React from 'react'

export const NotificationListItem = (props) => {
  debugger
  return(
    <div>
      <p key={props.idx}>You've matched with {props.users[props.notif.matched_with].name}</p>
      <p>Contact your pair via email: {props.users[props.notif.matched_with].email}</p>
    </div>
  )
}









