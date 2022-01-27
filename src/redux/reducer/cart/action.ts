import { cartActionEnum, addBasket, updateCart } from "./types";

type updateCartAction = {
  id: string;
  quantity: number;
  price: number;
};

const updateCart = ({ id, quantity, price }: updateCartAction): updateCart => {
  return {
    type: cartActionEnum.UPDATE_CART,
    payload: {
      id,
      quantity,
      price,
    },
  };
};

const addBasket = (basketData: any): addBasket => {
  return {
    type: cartActionEnum.ADD_BASKET,
    payload: basketData,
  };
};

export { updateCart, addBasket };
