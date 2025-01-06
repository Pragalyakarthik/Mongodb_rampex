import express from 'express';
import { fetch, create, update, deletes, getdetails} from '../controller/userController.js';

const router=express.Router();

router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',deletes);
router.get('/getdetail/:id',getdetails);
export default router;