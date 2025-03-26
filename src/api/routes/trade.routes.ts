import { Router } from "express";
import TradeController from "../controllers/trade.controller";

const tradeRouter = Router();
tradeRouter.post("/", TradeController.create);
tradeRouter.get("/", TradeController.getAll);
tradeRouter.get("/:id", TradeController.getById);
tradeRouter.put("/:id", TradeController.update);
tradeRouter.delete("/:id", TradeController.destroy);

export default tradeRouter;
