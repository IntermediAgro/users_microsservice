import { MODULES } from 'modules/app.factory';

const app = MODULES.INFRA.SERVER.HTTP();

app.use(MODULES.INFRA.SERVER.CORS());
