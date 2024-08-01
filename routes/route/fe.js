import { Router } from 'express';
const fe = Router();


fe.get('/home', (req, res) => {
    res.send("<h1>This section is under Construction</h1>")
})



export default fe;