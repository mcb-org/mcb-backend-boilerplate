import express, { type Application, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";

//import routes
import { userRouter } from "./routes";
import { notFound, errorHandler, processRequest } from "./middlewares";

import {
  dbConnect,
  swaggerSpec,
  // limiter
} from "./config";
import helmet from "helmet";
import { catchAsync } from "./utils";

//app config
const app: Application = express();

// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  }),
);

// Cookie parser is a middleware which parses cookies attached to the client request object.
app.use(cookieParser());

//rate limiter
// app.use("/api", limiter);

// swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//routes
app.use("/api/v1/user", userRouter);

// test route
app.get(
  "/",
  catchAsync(async (req, res: Response) => {
    res.status(200).json({
      success: true,
      message: "Welcome to the API 🚀",
    });
  }),

  //static files
  app.use(express.static("public")),
); // to serve static files

// add favicon.ico to static files on /public folder /favicon.ico
app.use("/favicon.ico", express.static("public/favicon.ico"));

// db config
void dbConnect();

//error handling middleware
app.use(notFound);
app.use(errorHandler);
app.use(processRequest);

//export app
export default app;
