import React, { useState, useEffect } from 'react'
import BoardElement from './BoardElement';
import AddForm from './AddForm';
import Messages from './Messages'

const Board = props => {
  const [registers, setRegisters] = useState([])

  useEffect(() => {
    setRegisters(props.users.sort((a, b) => b.value - a.value))
  }, [props.users])

  return (
    <div className="board">
      <div className="board__elements">
        <h1>Score Board</h1>
        {
          registers.map((el, i) => {
            return (
              <BoardElement
                key={el.label.split(" ").join()}
                className="board__element"
                label={el.label}
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
          inbox={props.inbox}
          users={props.users}
        />
      </div>
    </div>
  )
}

export default Board