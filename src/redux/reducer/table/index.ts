import produce from "immer";
import {
  InitialState,
  receivedCategory,
  tableAction,
  receivedProduct,
  filtredProduct,
  tableActionEnum,
} from "./types";

const initialState: InitialState = {
  products: {},
  categories: {},
  categoriesId: [],
  productsByCategoryId: {},
  currentCategory: {},
  currentProducts: [],
  categoriesNav: [],
  isError: false,
  isFetched: false,
};

const tableReducer = (state = initialState, action: tableAction) => {
  switch (action.type) {
    case tableActionEnum.SET_PRODUCTS: {
      const nextState = produce(state, (draftState) => {
        draftState.isFetched = true;
        draftState.isError = false;

        const allProducts: { [key: string]: filtredProduct } = {};
        const categoriesId: string[] = [];

        action.payload.forEach((category: receivedCategory) => {
          const products: { [key: string]: filtredProduct } = {};
          categoriesId.push(category.rid);

          category.goods.forEach((product: receivedProduct) => {
            const currentProduct = {
              id: product.gid,
              name: product.gname,
              price: Number(product.gprice),
              quantity: 0,
              summ: 0,
              categoryId: category.rid,
            };
            allProducts[product.gid] = currentProduct;
            products[product.gid] = currentProduct;
          });

          const currentCategory = {
            id: category.rid,
            name: category.rname,
            products,
          };

          draftState.categories[category.rid] = currentCategory;
          draftState.categoriesNav.push({
            name: category.rname,
            id: category.rid,
          });
        });
        draftState.products = allProducts;
        draftState.categoriesId = categoriesId;
      });
      return nextState;
    }
    case tableActionEnum.SET_ERROR:
      const nextState = produce(state, (draftState) => {
        draftState.isFetched = false;
        draftState.isError = true;
      });
      return nextState;
    case tableActionEnum.SET_QUANTITY: {
      const nextState = produce(state, (draftState) => {
        const { productId, quantity, categoryId } = action.payload;
        draftState.categories[categoryId].products[productId].quantity =
          quantity;
        draftState.categories[categoryId].products[productId].summ =
          state.products[productId].price * quantity;
      });
      return nextState;
    }
    default:
      return state;
  }
};

export { tableReducer };
