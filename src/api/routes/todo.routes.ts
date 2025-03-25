import { Router } from "express";
import TodoController from "../controllers/todo.controller";

const todoRouter = Router();
todoRouter.post("/random", TodoController.fake);
todoRouter.post("/", TodoController.create);
todoRouter.get("/", TodoController.getAll);
todoRouter.get("/:id", TodoController.getById);
todoRouter.put("/:id", TodoController.update);
todoRouter.delete("/:id", TodoController.delete);

export default todoRouter;
