const express = require('express');

const App = express();

App.set("view engine", "ejs");
App.use(express.static("public"));


App.get('/', (req, res) => {
    res.render("gq")
})

const PORT = process.env.PORT || 5678;

App.listen(PORT, () => {
    console.log("Application listioning on " + PORT);
})