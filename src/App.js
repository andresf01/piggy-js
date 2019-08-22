import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Welcome from './components/Welcome';
// import database from './firebase/firebase'

class App extends React.Component {
  state = {
    user: null,
    welcome: true,
    users: [],
  }

  handleChangeUser = username => {
    const _user = this.state.users.find(el => el.username === username)
    if (_user) {
      this.setState({ user: username, welcome: false })
      localStorage.setItem('user', username)
      return true
    }
    return false
  }

  handleLogout = () => {
    this.setState({ user: null, welcome: true })
    localStorage.setItem('user', 'null')
  }

  handleSaveIncome = (username, amount) => {
    const _user = this.state.users.find(el => el.username === username)
    if (_user)
      this.setState(state => ({ users: state.users.map(el => el.username === username ? { ...el, value: parseInt(el.value) + parseInt(amount) } : el) }))
  }

  componentDidMount() {
    if (!localStorage.getItem('user') || localStorage.getItem('user') === 'null') {
      localStorage.setItem('user', 'null')
    }
    else {
      this.setState({ user: localStorage.getItem('user'), welcome: false })
    }
  }

  render() {


    return (
      <div className="App">
        <Navbar handleLogout={this.handleLogout} />
        {
          this.state.welcome
            ?
            <Welcome
              handleChangeUser={this.handleChangeUser}
            />
            :
            <Board
              users={this.state.users}
              handleSaveIncome={this.handleSaveIncome}
            />
        }
      </div>
    );
  }
}

export default App;
