const { request } = require('undici');

module.exports = async (data, code) => {
    const body = `client_id=${data.clientId}&client_secret=${data.clientSecret}&code=${code}&redirect_uri=${data.redirectURI}&grant_type=authorization_code&scope=identify`
    
     const resp = await request('https://discord.com/api/oauth2/token',  {
        method: "POST",
        body: body,
        headers: {
	        'Content-Type': 'application/x-www-form-urlencoded',
				}
    });
    const Oauth2Data = await resp.body.json();
    return Oauth2Data;
}