import { tableActionEnum } from "./types";

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

const setCategory = (categoryId: string) => {
  return {
    type: tableActionEnum.SET_CATEGORY,
    payload: categoryId
  }
}

export { setQuantityProduct, setCategory };
