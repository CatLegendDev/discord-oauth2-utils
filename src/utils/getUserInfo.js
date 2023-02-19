import { request } from 'undici';

export default async (token) => {
    const resp = await request('https://discord.com/api/users/@me', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    const userInfo = await resp.body.json();
    return userInfo
};