import express from 'express';
import cors from 'cors';

export const setupMiddleware = (app) => {
    // Enable CORS
    app.use(cors());
    
    // Parse JSON bodies - MUST come before routes
    app.use(express.json());
    
    // Parse URL-encoded bodies
    app.use(express.urlencoded({ extended: true }));
    
    // Add request logging
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.path}`);
        console.log('Body:', req.body);
        console.log('Content-Type:', req.headers['content-type']);
        next();
    });
};
