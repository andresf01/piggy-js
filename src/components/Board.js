import React, { useState, useEffect } from 'react'
import BoardElement from './BoardElement';
import AddForm from './AddForm';
import Messages from './Messages'

const Board = props => {
  const [registers, setRegisters] = useState([])
  const [inbox, setInbox] = useState([])

  useEffect(() => {
    setRegisters(props.users.sort((a, b) => b.value - a.value))
    setInbox(props.users.find(el => el.username === props.username).inbox || [])
  }, [props.users, props.username])

  return (
    <div className="board">
      <div className="board__elements">
        <h1>Score Board</h1>
        {
          registers.map((el, i) => {
            return (
              <BoardElement
                key={el.name.split(" ").join()}
                className="board__element"
                label={el.name}
                value={el.value}
              />
            )
          })
        }
      </div>
      <div className="grid-col-2">
        <AddForm
          users={props.users}
          handleSaveIncome={props.handleSaveIncome}
        />
        <Messages
          inbox={inbox}
          users={props.users}
        />
      </div>
    </div>
  )
}

export default Board