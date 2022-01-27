import { tableActionEnum, setQuantity, getProducts } from "./types";

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

export { setQuantityProduct, getProducts };
