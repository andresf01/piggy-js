import React, { useState } from "react";
import classNames from 'classnames'

const Welcome = props => {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    if (username === '') {
      if (!Array.from(document.getElementById('form_username').classList).length) {
        document.getElementById('form_username').classList.add('shake')
      }
      else {
        document.getElementById('form_username').classList.remove('shake')
        setTimeout(() => {
          document.getElementById('form_username').classList.add('shake')
        }, 100);
      }
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (!props.handleChangeUser(username)){
        document.getElementById('form_username').classList.remove('shake')
        setTimeout(() => {
          document.getElementById('form_username').classList.add('shake')
        }, 100);
      }
    }, 3000);
  }

  return (
    <React.Fragment>
      <div className={classNames('welcome', { 'welcome--blur': loading })}>
        <div className="form">
          <h2>Username</h2>
          <input
            id="form_username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Type Username"
            onKeyDown={e => e.key === 'Enter' ? handleLogin() : (() => {})() }
          />
          <button type="button" onClick={handleLogin}>
            Login
        </button>
        </div>
      </div>
      <div className={classNames({ 'loading': loading }, { 'display-none': !loading })}>
        <div>LOADING</div>
      </div>
    </React.Fragment>
  )
}

export default Welcome