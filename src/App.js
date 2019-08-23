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
    user: null,
    welcome: true,
    users: [],
      { label: 'Paola Cruz', value: 5, username: 'pacruz', inbox: [] },
      { label: 'Leroy Mwanzia', value: 10, username: 'lmwanzia', inbox: [] },
      { label: 'Andres Martinez', value: 3, username: 'amartinez', inbox: [] },
    ],
  }

  handleChangeUser = username => {
    const _user = this.state.users.find(el => el.username === username)
    if (_user) {
      this.setState({ user: _user, welcome: false })
      localStorage.setItem('user', username)
      return true
    }
    return false
  }

  handleLogout = () => {
    this.setState({ user: null, welcome: true })
    localStorage.setItem('user', 'null')
  }

  handleSaveIncome = (username, amount, message) => {
    let _user = this.state.users.find(el => el.username === username)
    const date = moment()
    _user.value += amount
    _user.inbox = [..._user.inbox, { id: uuid(),author: this.state.user.username, message, date, amount }]
    if (_user)
      this.setState(state => ({ users: state.users.map(el => el.username === username ? _user : el) }))
  }

  componentDidMount() {
    if (!localStorage.getItem('user') || localStorage.getItem('user') === 'null') {
      localStorage.setItem('user', 'null')
    }
    else {
      const user = this.state.users.find(el => el.username === localStorage.getItem('user'))
      this.setState({ user , welcome: false })
    }
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
                inbox={this.state.user.inbox}
              />
            </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
