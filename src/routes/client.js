import express from 'express';
import { clientController } from '../controllers/client.js';

class ClientRoutes {
    router = express.Router();
    constructor() {
        this.initilise();
    }
    initilise() {

        this.router.put('/add', clientController.addclient);

        this.router.get('/get-all', clientController.getAllClients);
    }
}
export let clientRoutes = new ClientRoutes();