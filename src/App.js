import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Welcome from './components/Welcome';
import database from './firebase/firebase'
import moment from 'moment'
import { v1 as uuid } from 'uuid'

class App extends React.Component {
  state = {
    username: null,
    welcome: true,
    users: [],
  }

  handleChangeUser = username => {
    const { username: _username } = this.state.users.find(el => el.username === username)
    if (_username) {
      this.setState({ username, welcome: false })
      localStorage.setItem('username', username)
      return true
    }
    return false
  }

  handleLogout = () => {
    this.setState({ username: null, welcome: true })
    localStorage.setItem('user', 'null')
  }

  handleSaveIncome = (username, amount, message) => {
    let _user = this.state.users.find(el => el.username === username)
    const date = moment().format('X')
    _user.value += parseInt(amount)
    if (_user.inbox && _user.inbox.length)
      _user.inbox = [..._user.inbox, { id: uuid(), author: this.state.username, message, date, amount }]
    else
      _user.inbox = [{ id: uuid(), author: this.state.username, message, date, amount }]
    if (_user) {
      database.ref(`users/${username}`).update(_user).then(() => {
        this.setState(state => ({ users: state.users.map(el => el.username === username ? _user : el) }))
      })
    }
  }

  componentDidMount() {
    database.ref('users').on('value', (snapshot) => {
      const _users = snapshot.val()
      const users = []
      for (let item in _users)
        users.push(_users[item])
      this.setState({ users })
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.welcome
            ?
            <Welcome
              handleChangeUser={this.handleChangeUser}
            />
            :
            <React.Fragment>
              <Navbar handleLogout={this.handleLogout} />
              <Board
                users={this.state.users}
                handleSaveIncome={this.handleSaveIncome}
                username={this.state.username}
              />
            </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
