const express = require('express');
const route = express.Router();


route.get('/home', (req, res) => {
    res.send("<h1>checking the api connection</h1>")
})



module.exports = route;