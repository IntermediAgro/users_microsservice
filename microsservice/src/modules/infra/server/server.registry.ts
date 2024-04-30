export const SERVER_REGISTRY = {
  HTTP: Symbol.for('MODULE::INFRA::SERVER::HTTP'),
  CORS: Symbol.for('MODULE::INFRA::SERVER::CORS'),
  PARSER: {
    BODY: Symbol.for('MODULE::INFRA::SERVER::PARSER::BODY'),
  },
};
