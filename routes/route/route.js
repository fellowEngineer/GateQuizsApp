const express = require('express');
const navigation = express.Router();


///Navigation Routes
navigation.get('/', (req, res) => {
    res.render("gqa")
})

navigation.get('/aptitude', (req, res) => {
    res.render("p/aptitude-gqa")
})

navigation.get('/random', (req, res) => {
    res.render("p/random-gqa")
})

navigation.get('/subject', (req, res) => {
    res.render("p/subject-gqa")
})

navigation.get('/stream', (req, res) => {
    res.render("p/stream-gqa")
})





module.exports = navigation;