import dotnev from 'dotenv';

dotnev.config();
//if (process.env.NODE_ENV === 'production') dotnev.config({ path: '.env.prod' });

export const ENV = {
  ...process.env,
  DATABASE: {
    URL: process.env.DATABASE_URL,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
  },
};
