import { Request, Response } from "express";

export interface RequestFn {
  (req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
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
