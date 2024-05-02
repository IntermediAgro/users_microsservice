export const CONFIG_REGISTRY = {
  CONFIG: Symbol.for('MODULE::INFRA::CONFIG'),
  ENV: Symbol.for('MODULE::INFRA::CONFIG::ENV'),
  DATABASE: {
    URL: Symbol.for('MODULE::INFRA::CONFIG::DATABASE::URL'),
  },
  AUTH: {
    JWT: {
      SECRET: Symbol.for('MODULE::INFRA::CONFIG::JWT::SECRET'),
    },
  },
};
