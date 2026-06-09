import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { DATABASE_URL, NODE_ENV } from "./env";

const globalForPrisma = globalThis as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg({ connectionString: String(DATABASE_URL) }),
    log: ["warn", "error"],
  });

if (NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dbConnect = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default prisma;
