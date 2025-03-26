import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config";
import { Stock, StockCreation } from "../schemas/stock.schema";

class StockModel extends Model<Stock, StockCreation> implements Stock {
  id!: number;
  ticker!: string;
  shares!: number;
  price!: number;
}

StockModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    ticker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shares: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "stocks",
  }
);

export default StockModel;
