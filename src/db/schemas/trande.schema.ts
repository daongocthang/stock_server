import { Optional } from "sequelize";

export type TradeType = {
  id: number;
  ticker: string; // ma co phieu
  shares: number; // co phan
  price: number; // gia khop lenh
  purchasePrice: number; // gia mua
  type: number; // loai lenh
};
export type TradeCreation = Optional<TradeType, "id">;
export type TradeUpdate = {
  ticker?: string;
  shares?: number;
  price?: number;
  purchasePrice?: number;
  type?: number;
};
