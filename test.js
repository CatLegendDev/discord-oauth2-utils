const { Oauth2 } = require('./index.js');

const oauth2 = new Oauth2({
    clientId: '848638939811414026',
    clientSecret: 'Q8sat7HpwOp_nbJr2X98kLCXzCijZydv',
    redirectURI: 'https://neptunium.gq',
    scopes: ['identify', 'email', 'guilds']
})


/*oauth2.codeConvert('uZOHuGQkdBAtyisT7GOhz45eOLGNQK').then((data) => {
    console.log(data)
})*/

oauth2.fetchUser('Ff1fpyArEjff01WNQPCP87i611P79O').then((user) => {
    console.log(user.guilds.guilds[0])
})