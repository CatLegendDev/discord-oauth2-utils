npm:  
https://www.npmjs.com/package/discord-oauth2-utils

```ts
const client = new OAuth({
  clientId,
  clientSecret,
  redirectUri,
  scopes: ["identify"],
});
const auth = client.authorizationLink();

const {access_token} = await client.requestToken(code);
const user_raw = await client.fetchUser(access_token);
const guilds_raw = await client.fetchGuilds(access_token);
```