import { request } from "undici";
import type { Grant, Scope } from "utils/types.js";

export const requestToken = async (
  {
    clientId,
    clientSecret,
    redirectUri,
    scopes,
    grantType = "authorization_code",
  }: {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    scopes: Scope[];
    grantType: Grant;
  },
  code: string
) => {
  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
    code: code,
    grant_type: grantType,
  }).toString();

  const response = await request("https://discord.com/api/oauth2/token", {
    method: "POST",
    body: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.body.json();
};
