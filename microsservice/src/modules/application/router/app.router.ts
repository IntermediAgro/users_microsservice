import { Router } from 'express';

const APP_ROUTER = Router();

APP_ROUTER.get('/', (req, res) => res.send({ data: 'Hello World! :D' }));

export { APP_ROUTER };
