import React, { useState } from 'react'

const AddForm = props => {
  const options = props.users.sort((a, b) => b.label < a.label ? 1 : -1)
  const [amount, setAmount] = useState('')
  const [msg, setMsg] = useState('')

  const handleChangeInput = e => {
    if (!isNaN(e.target.value))
      setAmount(e.target.value.trim())
  }

  const handleSaveIncome = () => {
    const select = document.getElementById('selected_user')
    const username = select.value
    if (username) {
      props.handleSaveIncome(username, amount)
      setAmount('')
      setMsg('')
      select.value = 'Choose One'
    }
  }

  return (
    <div className="add-form">
      <h2>Add</h2>
      <select id="selected_user">
        <option value={''} >Choose One</option>
        {
          options.map(el =>
            <option key={el.username} value={el.username}>{el.label}</option>
          )
        }
      </select>
      <div className="add-form__input">
        <div>
          <input
            placeholder="Amount"
            value={amount}
            onChange={handleChangeInput}
          />
        </div>
        <span>$</span>
      </div>
      <input 
        placeholder="Message"
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />
      <button onClick={handleSaveIncome}>Add Income</button>
    </div>
  )
}

export default AddForm