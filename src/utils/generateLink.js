module.exports = (data) => {
    const url = `https://discord.com/api/oauth2/authorize?client_id=${data.clientId}&redirect_uri=${data.redirectURI}&response_type=${data.responseType}&scope=${data.scopes.join('%20')}`;
    return url;
}