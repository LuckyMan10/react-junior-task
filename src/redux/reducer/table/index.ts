import produce from "immer";
import {
  InitialState,
  receivedCategory,
  tableAction,
  receivedProduct,
  filtredProduct,
  tableActionEnum,
} from "./types";

export const initialState: InitialState = {
  products: {},
  categories: {},
  categoriesId: [],
  productsByCategoryId: {},
  currentCategory: {},
  currentCategoryName: "",
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
        action.payload.pop();
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
        const products = Object.values(draftState.categories[categoryId].products);
        draftState.currentProducts = products;
      });
      return nextState;
    }
    case tableActionEnum.SET_CURRENT_PRODUCTS: {
      const nextState = produce(state, (draftState) => {
        const {categoryId} = action.payload;
        const products = Object.values(state.categories[categoryId].products);
        const currentCategoryName = state.categories[categoryId].name;
        draftState.currentProducts = products;
        draftState.currentCategoryName = currentCategoryName;
        draftState.currentCategory = state.categories[categoryId];
      });
      return nextState;
    }
    default:
      return state;
  }
};

export { tableReducer };
