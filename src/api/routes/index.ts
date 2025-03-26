import { Router } from "express";
import stockRouter from "./stock.routes";
import tradeRouter from "./trade.routes";

const apiRouter = Router();
apiRouter.use("/stocks", stockRouter);
apiRouter.use("/trades", tradeRouter);

export default apiRouter;
