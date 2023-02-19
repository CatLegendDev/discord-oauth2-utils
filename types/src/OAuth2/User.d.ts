export default User;
declare class User {
    constructor({ user, guilds }: {
        user: object;
        guilds: Array;
    });
    user: object;
    guilds: Guilds;
}
import Guilds from "./Guilds.js";
