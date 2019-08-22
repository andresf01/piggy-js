import React from 'react'

const BoardElement = props => {
  return (
    <div>
      <span>{props.label} </span>
      <span>(${props.value})</span>
    </div>
  )
}

export default BoardElement