import { Container } from 'inversify';
import { CONFIG_REGISTRY } from './config.registry';
import { CONFIG } from './app.config';

export const CONFIG_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

CONFIG_MODULE.bind(CONFIG_REGISTRY.CONFIG).toConstantValue(CONFIG);
CONFIG_MODULE.bind(CONFIG_REGISTRY.ENV).toConstantValue(CONFIG.ENV);

CONFIG_MODULE.bind(CONFIG_REGISTRY.DATABASE.URL).toConstantValue(
  CONFIG.ENV.DATABASE.URL,
);

CONFIG_MODULE.bind(CONFIG_REGISTRY.AUTH.JWT.SECRET).toConstantValue(
  CONFIG.ENV.JWT.SECRET,
);
