import Guilds from './Guilds.js';

class User {
    constructor({user, guilds}) {
        this.user = user
        this.guilds = new Guilds(guilds)
    }
}

export default User;