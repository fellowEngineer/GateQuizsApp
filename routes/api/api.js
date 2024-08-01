import { Router } from 'express';
const route = Router();


route.get('/home', (req, res) => {
    res.send("<h1>checking the api connection</h1>")
})



export default route;