export default Oauth2;
export class Oauth2 {
    constructor({ clientId, clientSecret, redirectURI, responseType, scopes }: {
        clientId: string;
        clientSecret: string;
        redirectURI: string;
        responseType: string = "code";
        scopes: string[] | string = ["identify"];
    });
    clientId: string;
    clientSecret: string;
    redirectURI: string;
    responseType: string;
    getLink({state}: {state: string | number = 0}): string;
    setScopes(scopes: string[] | string): void;
    scopes: string[];
    getOauth2Data(code: string): Promise<object>;
    fetchUser(token: string): Promise<User>;
}
import User from "./User.js";
