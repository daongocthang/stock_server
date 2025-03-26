import { CreationOptional, DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config";
import { Trade, TradeCreation } from "../schemas/trande.schema";

class TradeModel extends Model<Trade, TradeCreation> implements Trade {
  id!: number;
  ticker!: string;
  shares!: number;
  price!: number;
  matchedDate!: string;
  purchasePrice!: number | undefined;
  sellOrder!: boolean;

  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
}

TradeModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    ticker: { type: DataTypes.STRING, allowNull: false },
    shares: { type: DataTypes.INTEGER, defaultValue: 0 },
    price: { type: DataTypes.FLOAT, defaultValue: 0 },
    matchedDate: DataTypes.STRING,
    purchasePrice: DataTypes.FLOAT,
    sellOrder: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { sequelize: sequelizeConnection, tableName: "trades" }
);

export default TradeModel;
