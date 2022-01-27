import { InitialState, cartAction, cartActionEnum } from "./types";
import produce from "immer";

const initialState: InitialState = {
  products: {},
  priceSumm: 0,
  totalProducts: 0,
  cartData: {},
  isAddBasketError: false
};

const cartReducer = (state = initialState, action: cartAction) => {
  switch (action.type) {
    case cartActionEnum.UPDATE_CART: {
      const nextState = produce(state, (draftState) => {
        const { id, quantity, price } = action.payload;
        draftState.products[id] = { quantity, price };
        draftState.cartData[id] = quantity;
        const priceAndTotal = Object.keys(draftState.products)
          .map((el) => Number(el))
          .reduce(
            (acc: number[], item: number) => {
              const currentPrice =
              draftState.products[item].quantity * draftState.products[item].price;
              const currentTotal = draftState.products[item].quantity;
              const result = [acc[0] + currentPrice, acc[1] + currentTotal];
              return result;
            },
            [0, 0]
          );
        draftState.priceSumm = priceAndTotal[0];
        draftState.totalProducts = priceAndTotal[1];
      });
      return nextState;
    }
    case cartActionEnum.ADD_BASKET_ERROR: {
        const nextState = produce(state, (draftState) => {
            draftState.isAddBasketError = true
        })
        return nextState;
    }
    default:
      return state;
  }
};

export { cartReducer };
