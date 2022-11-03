const Guilds = require('./Guilds.js')

class User {
    constructor({user, guilds}) {
        this.user = user
        this.guilds = new Guilds(guilds)
    }
}

module.exports = User;