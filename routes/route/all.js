import { Router } from 'express';
import { allMiddleware } from "../../middleware/all.middleware"
const navigation = Router();


///Navigation Routes
navigation.get('/all', allMiddleware);






export default navigation;