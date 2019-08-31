const { User } = require('../database/database')
const moment = require('moment')

class UserService {
  constructor(users) {
    this.users = User.find()
  }

  async find({ query: { username } }) {
    console.log('find triggered', moment().format('hh:mm:ss'))
    if (username)
      return User.find({ username })
    return User.find()
  }

  async get(username) {
    return User.find({ username })
  }

  async update(id, data, params) {
    this.users = this.users.map(el => el.id == id
      ? { ...el, name: data.name }
      : el
    )
  }

  async create(data) {
    console.log(data)
    return ({
      username: 'test',
      name: 'Test',
      inbox: [],
    })
  }
}

module.exports = UserService