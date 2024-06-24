import { Scope } from "utils/types.js";

export const authorizationLink = ({
  clientId,
  redirectUri,
  responseType,
  scopes,
  state = "",
  ...addable
}: {
  clientId: string;
  redirectUri: string;
  responseType: string;
  scopes: Scope[];
  state?: string;
}) => {
  state ||= (~~(Math.random() * Number.MAX_SAFE_INTEGER)).toString(16);
  const BASE = "https://discord.com/api/oauth2/authorize?";

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: responseType,
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
    state: state,
    prompt: "none",
    ...addable,
  }).toString();

  const url = `${BASE}${params}`;
  return url;
};
