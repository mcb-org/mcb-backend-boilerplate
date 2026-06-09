import dotenv from "dotenv";

//env
dotenv.config();

// port env
const PORT = process.env.PORT;

// postgres db env
const DATABASE_URL = process.env.DATABASE_URL;

// node env
const NODE_ENV = process.env.NODE_ENV;

// JWT env
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const PRISMA_ACCELERATE_URL = process.env.PRISMA_ACCELERATE_URL;

// export all env variables
export {
  DATABASE_URL,
  PORT,
  NODE_ENV,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  PRISMA_ACCELERATE_URL,
};
