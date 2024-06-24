import { request } from "undici";

export const fetchUser = async (token: string) => {
  const resp = await request("https://discord.com/api/users/@me", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const userInfo = await resp.body.json();
  return userInfo;
};
