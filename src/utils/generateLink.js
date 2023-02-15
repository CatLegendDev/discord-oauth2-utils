export default ({ clientId, redirectURI, responseType, scopes, state = 0 }) => {
    const BASE = "https://discord.com/api/oauth2/authorize?";

    const params = new URLSearchParams({
        "client_id": clientId,
        "response_type": responseType,
        "redirect_uri": redirectURI,
        "scope": scopes.join(" "),
        "state": String(state)
    }).toString();

    const url = `${ BASE }${ params }`;
    return url;
};