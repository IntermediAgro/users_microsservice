import { CONFIG } from './app.config';
import { CONFIG_MODULE } from './config.module';
import { CONFIG_REGISTRY } from './config.registry';

export const CONFIG_FACTORY = {
  CONFIG: CONFIG_MODULE.get<typeof CONFIG>(CONFIG_REGISTRY.CONFIG),
  ENV: CONFIG_MODULE.get<typeof CONFIG.ENV>(CONFIG_REGISTRY.ENV),
  DATABASE: {
    URL: CONFIG_MODULE.get<typeof CONFIG.ENV.DATABASE.URL>(
      CONFIG_REGISTRY.DATABASE.URL,
    ),
  },
  AUTH: {
    JWT: {
      SECRET: CONFIG_MODULE.get<typeof CONFIG.ENV.JWT.SECRET>(
        CONFIG_REGISTRY.AUTH.JWT.SECRET,
      ),
    },
  },
};
