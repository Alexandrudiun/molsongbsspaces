import express from 'express';
import { getUserById } from '../crud/user.js';

const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({ message: "User route is working" });
});

router.get("/:id", getUserById);

export default router;

