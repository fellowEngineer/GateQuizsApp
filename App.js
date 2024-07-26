const express = require('express');

const App = express();

App.set("view engine", "ejs");
App.use(express.static("public"));


App.get('/', (req, res) => {
    res.render("gqa")
})

App.get('/aptitude', (req, res) => {
    res.render("p/aptitude-gqa")
})

App.get('/random', (req, res) => {
    res.render("p/random-gqa")
})

App.get('/subject', (req, res) => {
    res.render("p/subject-gqa")
})

App.get('/stream', (req, res) => {
    res.render("p/stream-gqa")
})




App.get('/login', (req, res) => {
    res.render("p/login-gqa")
})

App.get('/signup', (req, res) => {
    res.render("p/signup-gqa")
})


const PORT = process.env.PORT || 5678;

App.listen(PORT, () => {
    console.log("Application listioning on " + PORT);
})