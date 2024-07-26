const express = require('express');
const fe = express.Router();


fe.get('/home', (req, res) => {
    res.send("<h1>This section is under Construction</h1>")
})



module.exports = fe;