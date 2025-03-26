import { Router } from "express";
import { IController } from "../../interfaces";

function newRouter<T extends IController>(t: { new (): T }): Router {
  const router = Router();
  router.post("/", t.create);
  router.get("/", t.getAll);
  router.get("/:id", t.getById);
  router.put("/:id", t.update);
  router.delete("/:id", t.destroy);

  return router;
}

export default stockRouter;
