const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const app = express();

app.post('/login', (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '1270b5698aed42ed830a1ae2ec10e083',
        clientSecret: '94d5b07f998d472c8b2a63dbec96d735'
    })
})