import { Request, Response } from "express";
import { TradeService } from "../../db/services/trade.service";
import { BadRequestError } from "../../middlewares/error.middleware";
export default class TradeController {
  public static getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw new Error("Index is invalid");

    const result = await TradeService.getById(id);
    return res.status(200).send(result);
  };

  public static getAll = async (req: Request, res: Response) => {
    const results = await TradeService.list();
    return res.status(200).send(results);
  };

  public static create = async (req: Request, res: Response) => {
    const body = req.body;
    if (!body) throw new BadRequestError("Data must be not empty");
    const result = await TradeService.create(body);
    return res.status(200).send(result);
  };
  public static update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    if (isNaN(id) || !body) throw new BadRequestError("Appear an error.");

    const result = await TradeService.update(id, body);
    return res.status(200).send(result);
  };
  public static destroy = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw new BadRequestError("Index is invalid");

    TradeService.destroy(id);
    return res.status(200).send({ message: "complete" });
  };
}
