import React from 'react'
import Message from './Message';

const Messages = props => {
  const inbox = props.inbox ? props.inbox.sort((a, b) => b.date < a.date ? -1 : 1) : []
  return (
    <div>
      <h2>Messages</h2>
      {
        inbox.length
        ? <div className="messages">
          {
            inbox.map(el =>
              <Message
                key={el.id}
                user={props.users.find(e => e.username === el.author)}
                date={el.date}
                message={el.message}
                amount={el.amount}
              />
            )
          }
        </div>
        : <div>You don't have messages</div>
      }
    </div>
  )
}

export default Messages