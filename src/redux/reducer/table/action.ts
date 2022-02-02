import {
  tableActionEnum,
  setQuantity,
  getProducts,
  setCurrentProducts,
} from "./types";

type setQuantityAction = {
  productId: string;
  quantity: number;
  categoryId: string;
};

const setQuantityProduct = ({
  productId,
  quantity,
  categoryId,
}: setQuantityAction): setQuantity => {
  return {
    type: tableActionEnum.SET_QUANTITY,
    payload: {
      productId,
      quantity,
      categoryId,
    },
  };
};

const getProducts = (): getProducts => {
  return {
    type: tableActionEnum.GET_PRODUCTS,
  };
};

const setCurrentProducts = (categoryId: string): setCurrentProducts => {
  return {
    type: tableActionEnum.SET_CURRENT_PRODUCTS,
    payload: {
      categoryId,
    },
  };
};

export { setQuantityProduct, getProducts, setCurrentProducts };
