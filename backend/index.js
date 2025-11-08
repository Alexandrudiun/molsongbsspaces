const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connections
const desksConnection = mongoose.createConnection(process.env.MONGO_molson_desks);
const usersConnection = mongoose.createConnection(process.env.MONGO_molson_user);

// Connection event listeners
desksConnection.on('connected', () => {
    console.log('MongoDB connected successfully to molson_desks');
});

desksConnection.on('error', (err) => {
    console.error('MongoDB molson_desks connection error:', err);
});

usersConnection.on('connected', () => {
    console.log('MongoDB connected successfully to molson_users');
});

usersConnection.on('error', (err) => {
    console.error('MongoDB molson_users connection error:', err);
});

// Export connections for use in models
app.locals.desksDB = desksConnection;
app.locals.usersDB = usersConnection;

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
