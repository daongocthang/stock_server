import { Optional } from "sequelize";

// Co phieu
export type Stock = {
  id: number;
  ticker: string; //ma chung khoan
  shares: number; //co phan dang nam giu
  price: number; //gia mua
};

export type StockCreation = Optional<Stock, "id">;
