import { OAuth } from "./src/OAuth2";

if (!process.env.TEST) {
  throw new Error(
    "env.TEST must have: {clientId} {clientSecret} {redirectUri}, — without brackets"
  );
}

const [clientId, clientSecret, redirectUri] = process.env.TEST!.split(" ");
const client = new OAuth({
  clientId,
  clientSecret,
  redirectUri,
  scopes: ["identify"],
});

console.info(client.authorizationLink());
const code = await prompt("Code: ");
if (!code) {
  throw new Error("Missing code");
}

const response = await client.requestToken(code);
console.info(response);
