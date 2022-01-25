import produce from "immer"
import {
  InitialState,
  receivedCategory,
  tableAction,
  receivedProduct,
} from "./types";

const initialState: InitialState = {
  products: {},
  categories: {},
  isError: false,
  isFetched: false,
};

const tableReducer = (state = initialState, action: tableAction) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      const stateCopy: InitialState = {
        ...state,
        products: {},
        categories: {},
        isError: false,
        isFetched: true
      };
      action.payload.forEach((category: receivedCategory) => {
        const productsId: string[] = [];
        category.goods.forEach((product: receivedProduct) => {
          productsId.push(product.gid);
          stateCopy.products[product.gid] = {
            id: product.gid,
            name: product.gname,
            price: Number(product.gprice),
            quantity: 1,
            summ: Number(product.gprice),
            categoryId: category.rid,
          };
        });
        stateCopy.categories[category.rid] = {
          id: category.rid,
          name: category.rname,
          totalPrice: 0,
          totalQuantity: 0,
          productsId
        };
      });
      return stateCopy;
    case "SET_PRODUCTS_ERROR":
      return {
        ...state,
        isFetched: false,
        isError: true,
      };
    case "SET_QUANTITY":
      const nextState = produce(state, draftState => {
        const {productId, quantity} = action.payload;
        const product = draftState.products[productId];
        const price = product.price;
        product.quantity = quantity;
        product.summ = price * quantity;
      })
      return nextState;
    default:
      return state;
  }
};

export { tableReducer };
