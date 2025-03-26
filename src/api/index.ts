import { Request, Response, Router } from "express";

export interface IController {
  create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  getById(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  getAll(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  update(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  destroy(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
}

export function routerOf<T extends IController>(type: { new (): T }): Router {
  const router = Router();
  const t = new type();
  router.post("/", t.create);
  router.get("/", t.getAll);
  router.get("/:id", t.getById);
  router.put("/:id", t.update);
  router.delete("/:id", t.destroy);

  return router;
}
