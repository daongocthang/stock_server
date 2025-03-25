import { CreationOptional, DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config";
import { TradeCreation, TradeType } from "../schemas/trande.schema";

class TradeModel extends Model<TradeType, TradeCreation> {
  declare id: number;
  declare ticker: string;
  declare shares: number;
  declare price: number;
  declare purchasePrice: number;
  declare type: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
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
    purchasePrice: DataTypes.FLOAT,
    type: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  { sequelize: sequelizeConnection, tableName: "trades" }
);

export default TradeModel;
