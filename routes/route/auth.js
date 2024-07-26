const express = require('express');
const auth = express.Router();


auth.get('/login', (req, res) => {
    res.render("p/login-gqa")
})

auth.get('/signup', (req, res) => {
    res.render("p/signup-gqa")
})



module.exports = auth;