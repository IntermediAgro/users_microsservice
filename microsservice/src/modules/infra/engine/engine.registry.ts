export const ENGINE_REGISTRY = {
  DATABASE: {
    PRISMA: Symbol.for('MODULE::INFRA::ENGINE::DATABASE::PRISMA'),
  },
  AUTH: {
    JWT: Symbol.for('MODULE::INFRA::ENGINE::AUTH::JWT'),
  },
  PRISMA: Symbol.for('MODULE::INFRA::ENGINE::PRISMA'),
  JWT: Symbol.for('MODULE::INFRA::ENGINE::JWT'),
};
