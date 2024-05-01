export const USE_CASE_REGISTRY = {
  USER: {
    CREATE: Symbol.for('MODULE::USE_CASE::USER::CREATE'),
    FIND: {
      BY: { EMAIL: Symbol.for('MODULE::USE_CASE::USER::FIND::BY::EMAIL') },
    },
  },
};
