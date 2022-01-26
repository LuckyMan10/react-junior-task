import produce from "immer";
import {
  InitialState,
  receivedCategory,
  tableAction,
  receivedProduct,
  filtredProduct,
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
    case "SET_PRODUCTS": {
      const nextState = produce(state, (draftState) => {
        draftState.isFetched = true;
        draftState.isError = false;

        const allProducts: { [key: string]: filtredProduct } = {};
        const categoriesId: string[] = [];

        action.payload.forEach((category: receivedCategory, index: number) => {
          const products: filtredProduct[] = [];
          const productsId: string[] = [];
          categoriesId.push(category.rid);

          category.goods.forEach((product: receivedProduct) => {
            const currentProduct = {
              id: product.gid,
              name: product.gname,
              price: Number(product.gprice),
              quantity: 1,
              summ: Number(product.gprice),
              categoryId: category.rid,
            };
            allProducts[product.gid] = currentProduct;
            productsId.push(currentProduct.id);
            products.push(currentProduct);
          });

          const currentCategory = {
            id: category.rid,
            name: category.rname,
            productsId,
          };
          if (index === 0) {
            draftState.currentCategory = {
              name: category.rname,
              id: category.rid,
            };
            draftState.currentProducts = products;
          }

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
    case "SET_PRODUCTS_ERROR":
      const nextState = produce(state, (draftState) => {
        draftState.isFetched = false;
        draftState.isError = true;
      });
      return nextState;
    case "SET_QUANTITY": {
      const nextState = produce(state, (draftState) => {
        const { productId, quantity } = action.payload;
        draftState.products[productId].quantity = quantity;
        draftState.products[productId].summ =
          state.products[productId].price * quantity;
      });
      console.log(nextState)
      return nextState;
    }
    default:
      return state;
  }
};

export { tableReducer };
