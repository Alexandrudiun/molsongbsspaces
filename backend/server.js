import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './db/initDB.js';
import { setupMiddleware } from './middleware/app.middleware.js';
import router from './routes/router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database connections
const { desksConnection, usersConnection } = initDB();

// Store connections in app.locals for access in routes
app.locals.desksDB = desksConnection;
app.locals.usersDB = usersConnection;

// Setup middleware BEFORE routes
setupMiddleware(app);

// Setup routes
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
