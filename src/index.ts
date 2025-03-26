import * as dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Express } from "express";
import "express-async-errors";
import { routerOf } from "./api";
import StockController from "./api/controllers/stock.controller";
import TradeController from "./api/controllers/trade.controller";
import dbInit from "./db";
import { errorHandler } from "./middlewares/error.middleware";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = parseInt(process.env.NODE_PORT as string) || 5000;
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

// API Routes
// app.use("/api", apiRouter);
app.use("/api/stocks", routerOf(StockController));
app.use("/api/trades", routerOf(TradeController));

// Exception Middleware
app.use(errorHandler);

dbInit();
