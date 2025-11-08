import express from 'express';
import userRouter from './user.route.js';
import deskRouter from './desk.route.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/desk', deskRouter);

export default router;

