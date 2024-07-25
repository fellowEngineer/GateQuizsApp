const express = require('express');

const App = express();



App.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>");
})

const PORT = process.env.PORT || 5678;

App.listen(PORT, () => {
    console.log("Application listioning on " + PORT);
})