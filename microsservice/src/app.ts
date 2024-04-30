import { MODULES } from './modules/app.factory';

const app = MODULES.INFRA.SERVER.HTTP();

app.use(MODULES.INFRA.SERVER.CORS());
app.use(MODULES.INFRA.SERVER.PARSER.BODY());
app.use(MODULES.MIIDLEWARE.LOGGER.APP());
app.use(MODULES.ROUTER.APP());
app.use(MODULES.MIIDLEWARE.LOGGER.ERROR());
app.use(MODULES.MIIDLEWARE.ERROR());

export { app };
