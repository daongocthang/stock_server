import StockModel from "../models/stock.model";
import { Stock, StockCreation } from "../schemas/stock.schema";

export class StockService {
  public static async create(values: StockCreation): Promise<Stock> {
    return await StockModel.create(values);
  }
  public static async list(): Promise<Stock[]> {
    return await StockModel.findAll();
  }

  public static async count(): Promise<number> {
    return await StockModel.count();
  }

  public static async getById(id: number): Promise<Stock | null> {
    return await StockModel.findByPk(id);
  }

  public static async update(id: number, values: {}): Promise<Stock> {
    const model = await StockModel.findByPk(id);
    if (model === null) throw new Error("Index is invalid");
    return await model.update(values);
  }
  public static async destroy(id: number): Promise<void> {
    const model = await StockModel.findByPk(id);
    if (model === null) throw new Error("Index is invalid");
    await model.destroy();
  }
}
