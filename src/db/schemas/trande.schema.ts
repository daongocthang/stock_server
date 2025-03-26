import { Optional } from "sequelize";

export type Trade = {
  id: number;
  ticker: string; // ma co phieu
  shares: number; // co phan
  price: number; // gia khop lenh
  matchedDate: string;
  purchasePrice: number | undefined; // gia mua
  sellOrder: boolean; // loai lenh
};
export type TradeCreation = Optional<Trade, "id">;
