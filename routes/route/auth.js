import { Router } from 'express';
const auth = Router();


auth.get('/login', (req, res) => {
    res.render("p/login-gqa")
})

auth.get('/signup', (req, res) => {
    res.render("p/signup-gqa")
})



export default auth;