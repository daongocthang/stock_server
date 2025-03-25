import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config";
import { Stock, StockCreation } from "../schemas/stock.schema";

class StockModel extends Model<Stock, StockCreation> implements Stock {
  id!: number;
  ticker!: string;
  shares!: number;
  price!: number;
  createdAt!: string;
  updatedAt!: string;
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
    createdAt: {
      type: DataTypes.STRING,
    },
    updatedAt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "stocks",
    timestamps: false,
  }
);

export default StockModel;
