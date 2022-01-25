import { setQuantity, tableActionEnum } from "./types";

type setQuantityAction = {
  productId: string;
  quantity: number;
};

const setQuantityProduct = ({ productId, quantity }: setQuantityAction) => {
  return {
    type: tableActionEnum.SET_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

export { setQuantityProduct };
