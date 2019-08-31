import React from 'react'
import moment from 'moment'

const Message = props => {
  return (
    <div className="message">
      <div className="message__header">
        <span>{props.user.label} (${props.amount})</span> 
        <span>{moment(props.date, 'X').calendar()}</span>
      </div>
      <div>{props.message}</div>
    </div>
  )
}

export default Message