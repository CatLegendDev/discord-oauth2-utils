import { request } from 'undici';

export default async ({clientId, clientSecret, redirectURI, scopes}, code) => {

    const GRAND_TYPE = "authorization_code";

    const params = new URLSearchParams({
        "client_id": clientId,
        "client_secret": clientSecret,
        "redirect_uri": redirectURI,
        "scope": scopes.join(" "),
        "code": code,
        "grant_type": GRAND_TYPE
    }).toString();
    
     const resp = await request('https://discord.com/api/oauth2/token',  {
        method: "POST",
        body: params,
        headers: {
	        'Content-Type': 'application/x-www-form-urlencoded',
		}
    });
    const Oauth2Data = await resp.body.json();
    return Oauth2Data;
};