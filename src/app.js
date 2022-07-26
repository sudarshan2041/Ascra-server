import { mongo } from "./database/mongoDB.js";
import express from 'express';
import http from 'http';
import cors from 'cors';
import { Routes } from "./routes.js";

class App {
    app;
    server;
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.startServer();
    }
    startServer() {
        const port = process.env.PORT || 1337;
        this.app.get('/', async (req, res) => {
            res.send("<h1>Assignment<h1>");
        });
        this.server.listen(port, () => {
            console.log(`port is running on ${port}`);
        });
        this.app.use(cors());
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
        mongo.mongoConnect();
        new Routes(this.app);
    }
}

export let nodeApp = new App();