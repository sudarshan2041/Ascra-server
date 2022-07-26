import { authRoutes } from '../src/routes/auth.js';
import { clientRoutes } from '../src/routes/client.js';

export class Routes {
    constructor(app) {
        app.use('/applications/auth', authRoutes.router);
        app.use('/applications/client', clientRoutes.router);
    }
}