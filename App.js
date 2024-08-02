import express from 'express';

const App = express();

App.set("view engine", "ejs");

App.use(express.urlencoded({extended : true}));
App.use(express.static("public"));



/// Routing Section 
import navigation from './routes/route/route.js';
import auth from './routes/route/auth.js';
import api from './routes/api/api.js';
import fe from './routes/route/fe.js';

App.use('/', navigation)
App.use('/', auth)
App.use('/api', api)
App.use('/fe', fe)




const PORT = process.env.PORT || 5678;

App.listen(PORT, () => {
    console.log("Application listioning on " + PORT);
})