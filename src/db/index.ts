import { developing } from "./config";
import StockModel from "./models/stock.model";
import TradeModel from "./models/trade.model";
import { StockService } from "./services/stock.service";
export const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

const dbInit = async () => {
  await StockModel.sync({ alter: developing });
  await TradeModel.sync({ alter: developing });

  let count = await StockService.count();
  if (count === 0)
    await StockService.create({ ticker: "STB", shares: 10000, price: 39.1 });
  count = await StockService.count();
  if (count > 0) {
    console.log(await StockService.getById(1));
  }
};

export default dbInit;
