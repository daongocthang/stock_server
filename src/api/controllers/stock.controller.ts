import { Request, Response } from "express";
import { StockService } from "../../db/services/stock.service";
import { IController } from "../../interfaces";
import { BadRequestError } from "../../middlewares/error.middleware";

export default class StockController implements IController {
  public async create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const body = req.body;
    if (!body) throw new BadRequestError("Data must be not empty");
    const result = await StockService.create(body);
    return res.status(200).send(result);
  }
  public async getById(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw new Error("Index is invalid");

    const result = await StockService.getById(id);
    return res.status(200).send(result);
  }
  public async getAll(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const results = await StockService.list();
    return res.status(200).send(results);
  }
  public async update(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const id = parseInt(req.params.id);
    const body = req.body;
    if (isNaN(id) || !body) throw new BadRequestError("Appear an error.");

    const result = await StockService.update(id, body);
    return res.status(200).send(result);
  }
  public async destroy(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw new BadRequestError("Index is invalid");

    StockService.destroy(id);
    return res.status(200).send({ message: "complete" });
  }
}
