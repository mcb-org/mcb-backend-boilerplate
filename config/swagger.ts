import swaggerJsdoc from "swagger-jsdoc";
import { PORT } from "./env";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MCB Backend Boilerplate API",
      version: "1.0.0",
      description: "Boilerplate backend service for Medi Car BD",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
