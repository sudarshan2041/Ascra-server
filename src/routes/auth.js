import express from 'express';
import { authController } from '../controllers/auth.js';

class AuthRoutes {
    router = express.Router();
    constructor() {
        this.initilise();
    }
    initilise() {

        this.router.post('/login', authController.login);

        this.router.post('/logout', authController.logout);
    }
}
export let authRoutes = new AuthRoutes();