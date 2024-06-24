import { authorizationLink } from "../utils/authorizationLink.js";
import { fetchGuilds } from "../utils/fetchGuilds.js";
import { fetchUser } from "../utils/fetchUser.js";
import { refreshToken } from "../utils/refreshToken.js";
import { requestToken } from "../utils/requestToken.js";
import type { Scope } from "../utils/types.js";
export class OAuth {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  responseType: string;
  scopes: Scope[];

  constructor({
    clientId = "",
    clientSecret = "",
    redirectUri = "",
    responseType = "code",
    scopes = ["identify"] as Scope[],
  }) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
    this.responseType = responseType;
    this.scopes = scopes;
  }

  authorizationLink({ state }: { state?: string } = {}) {
    if (!this.redirectUri) {
      throw new Error("Missing redirectURI");
    }
    return authorizationLink({ ...this, state });
  }

  async requestToken(code: string) {
    if (!code) {
      throw new Error("Missing code");
    }
    if (!this.clientId) {
      throw new Error("Missing client id");
    }
    if (!this.clientSecret) {
      throw new Error("Missing client secret");
    }

    return requestToken(
      {
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        redirectUri: this.redirectUri,
        scopes: this.scopes,
        grantType: "authorization_code",
      },
      code
    );
  }

  async refreshToken(token: string) {
    return refreshToken({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      refreshToken: token,
    });
  }

  async fetchUser(token: string) {
    if (!token) {
      throw new Error("Missing access token");
    }

    return fetchUser(token);
  }

  async fetchGuilds(token: string) {
    if (!token) {
      throw new Error("Missing access token");
    }

    return await fetchGuilds(token);
  }
}
