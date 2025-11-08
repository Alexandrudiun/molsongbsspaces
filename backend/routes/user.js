import express from 'express';
import { getUserById } from '../crud/user';

const router = express.Router();

// GET /user/:id - Retrieve user by ID
// use the function from above
router.get("/:id", getUserById);

export default router;

