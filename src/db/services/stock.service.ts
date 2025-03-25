import StockModel from "../models/stock.model";
import { Stock, StockCreation } from "../schemas/stock.schema";

export class StockService {
  public static async create(values: StockCreation): Promise<Stock> {
    return (await StockModel.create(values)).get();
  }
  public static async list(): Promise<Stock[]> {
    const res = await StockModel.findAll();
    return res.map((value) => value.get());
  }
  public static async count(): Promise<number> {
    return await StockModel.count();
  }
  public static async getById(id: number): Promise<Stock | null> {
    const res = await StockModel.findByPk(id);
    if (res === null) return null;

    return res.get();
  }
  public static async update(id: number, values: {}): Promise<Stock> {
    const model = await StockModel.findByPk(id);
    if (model === null) throw new Error("Index is invalid");
    const res = await model.update(values);
    return res.get();
  }
  public static async destroy(id: number): Promise<void> {
    const model = await StockModel.findByPk(id);
    if (model === null) throw new Error("Index is invalid");
    await model.destroy();
  }
}
