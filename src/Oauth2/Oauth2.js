import { generateLink, getCodeInfo, getUserInfo, getUserGuilds } from '../utils/utils.js';
import User from './User.js';

class OAuth2 {
    constructor({clientId, clientSecret, redirectURI='', responseType='code', scopes=['identify']}) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectURI = redirectURI;
        this.responseType = responseType;
        this.setScopes(scopes);
    }

    getLink({state = 0} = {}) {
        if (this.redirectURI == '') {
            throw new Error('Missing redirectURI');
            return;
        }
        return generateLink({...this, state});
    }

    setScopes(scopes){
        const space = " ";
        typeof scopes === "string" && (scopes = scopes.split(space));
        this.scopes = scopes;
    }

    async getOAuth2Data(code) {
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
       
        const OAuth2Data = await getCodeInfo(this, code);
        return OAuth2Data;
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

export default OAuth2;
export {OAuth2};