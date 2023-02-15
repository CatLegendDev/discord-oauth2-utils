import { request } from 'undici';

export default async (token) => {
    const resp = await request('https://discord.com/api/users/@me/guilds', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    const userGuilds = await resp.body.json();
    return userGuilds;
};