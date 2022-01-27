import { filtredProduct } from "redux/reducer/table/types";

export type record = {
  categoryId: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  summ: number;
};

export type table = {
  name: string;
  products: filtredProduct[];
  categoryId: string;
};
