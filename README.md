# discord-oauth2-utils
### npm module for working with Discord OAuth2
`npm install discord-oauth2-utils`  
###### Check discord OAuth2 documentation: https://discord.com/developers/docs/topics/oauth2

### Installing

```bash
npm install discord-oauth2-utils
```

# OAuth2. Main interface
```js
const OAuth2 = require("discord-oauth2-utils");
```
Expets one param — options:

### `Options`


Request options:
```ts
clientId: BigInt | string; // Your OAuth2 client id. 

clientSecret: string; // Your OAuth2 client secret.

redirectURI: URL; // Redirect to page with presented URL.

scopes: Array<string> = ["identify"]; // List of scopes

responseType: "code" | "token" = "code";
```
```js
const options = { clientId, clientSecret, ..., responseType };
const oauth2 = new OAuth2(options);
```

# Methods

### `getLink(): URL`

Returns URL like format:  
`https://discord.com/api/oauth2/authorize?client_id=&redirect_uri=&response_type=&scope=`




### `getOauth2Data(code): Oauth2Data`
`code` — you can get code after user authorization and he redirect. Code will become part of the URL address as hash.

Returns [Oauth2Data](#oauth2data).

### `fetchUser(token): User`
`token` — you can get token after user authorization and he redirect. `access_token` will become part of the URL address as query.

Returns [User]()
***
# Secondary interfaces
### Oauth2Data
