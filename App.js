const express = require('express');

const App = express();

App.set("view engine", "ejs");
App.use(express.static("public"));



/// Routing Section 
const navigation = require('./routes/route/route')
const auth = require('./routes/route/auth')
const api = require('./routes/api/api')
const fe = require('./routes/route/fe')

App.use('/', navigation)
App.use('/', auth)
App.use('/api', api)
App.use('/fe', fe)




const PORT = process.env.PORT || 5678;

App.listen(PORT, () => {
    console.log("Application listioning on " + PORT);
})