import { generateLink, getCodeInfo, getUserInfo, getUserGuilds } from '../utils/utils.js';
import User from './User.js';

class Oauth2 {
    constructor({clientId, clientSecret, redirectURI='', responseType='code', scopes=['identify']}) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectURI = redirectURI;
        this.responseType = responseType;
        this.setScopes(scopes);
    }

    getLink() {
        if (this.redirectURI == '') {
            throw new Error('Missing redirectURI');
            return;
        }
        return generateLink(this);
    }

    setScopes(scopes){
        const space = " ";
        typeof scopes === "string" && (scopes = scopes.split(space));
        this.scopes = scopes;
    }

    async getOauth2Data(code) {
        if (!code) {
            throw new Error('Missing code');
            return;
        }
        if (!this.clientId) {
            throw new Error('Missing client id');
            return;
        }
        if (!this.clientSecret) {
            throw new Error('Missing client secret');
            return;
        }
       
        const Oauth2Data = await getCodeInfo(this, code);
        return Oauth2Data;
    }

    async fetchUser(token) {
        if (!token) {
            throw new Error('Missing access token');
            return;
        }

        const userInfo = await getUserInfo(token);
        const userGuilds = await getUserGuilds(token);

        const user = new User({user: userInfo, guilds: userGuilds});
        return user;
    }
    
}

export default Oauth2;
export {Oauth2};