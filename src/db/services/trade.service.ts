import TradeModel from "../models/trade.model";
import { Trade, TradeCreation } from "../schemas/trande.schema";

export class TradeService {
  public static async create(values: TradeCreation): Promise<Trade> {
    return (await TradeModel.create(values)).get();
  }
  public static async list(): Promise<Trade[]> {
    const res = await TradeModel.findAll();
    return res.map((value) => value.get());
  }
  public static async count(): Promise<number> {
    return await TradeModel.count();
  }
  public static async getById(id: number): Promise<Trade | null> {
    const res = await TradeModel.findByPk(id);
    if (res === null) return null;

    return res.get();
  }
  public static async update(id: number, values: {}): Promise<Trade> {
    const model = await TradeModel.findByPk(id);
    if (model === null) throw new Error("Index is invalid");
    const res = await model.update(values);
    return res.get();
  }
  public static async destroy(id: number): Promise<void> {
    const model = await TradeModel.findByPk(id);
    if (model === null) throw new Error("Index is invalid");
    await model.destroy();
  }
}
