import produce from "immer";
import {
  InitialState,
  receivedCategory,
  tableAction,
  receivedProduct,
  filtredProduct
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

        const allProducts: {[key: string]: filtredProduct} = {};
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
            productsId 
          }
          if(index === 0) {
            draftState.currentCategory = {
              name: category.rname,
              id: category.rid
            }
            draftState.currentProducts = products;
          }

          draftState.categories[category.rid] = currentCategory;
          draftState.categoriesNav.push({
            name: category.rname,
            id: category.rid
          })
        });
        draftState.products = allProducts;
        draftState.categoriesId = categoriesId;
        /*
        const currentCategoryId = action.payload[0].rid;
        draftState.isFetched = true;
        draftState.isError = false;
        draftState.currentCategory = currentCategoryId;
        draftState.currentCategoryName = action.payload[0].rname;
        action.payload.forEach((category: receivedCategory) => {
          const productsId: string[] = [];
          draftState.categoriesId.push(category.rid);
          draftState.categoriesNav.push({
            name: category.rname,
            id: category.rid
          })
          const products: any = [];
          category.goods.forEach((product: receivedProduct) => {
            const currentProduct = {
              id: product.gid,
              name: product.gname,
              price: Number(product.gprice),
              quantity: 1,
              summ: Number(product.gprice),
              categoryId: category.rid,
            }
            products.push(currentProduct);
            productsId.push(product.gid);
            if(category.rid === currentCategoryId) {
              draftState.currentProducts.push(currentProduct);
            }
          })
          draftState.productsByCategoryId[category.rid] = products;
        });
        */
      });
      return nextState;
    }
    case "SET_PRODUCTS_ERROR":
      return {
        ...state,
        isFetched: false,
        isError: true,
      };
    case "SET_QUANTITY": {
      const nextState = produce(state, (draftState) => {
        const { productId, quantity } = action.payload;
        const [product] = draftState.currentProducts.filter(
          (product) => product.id === productId
        );
        const price = product.price;
        product.quantity = quantity;
        product.summ = price * quantity;
      });
      return nextState;
    }
    case "SET_CATEGORY": {
      /*
      const nextState = produce(state, (draftState) => {
        const categoryId = action.payload;
        draftState.currentProducts = state.productsByCategoryId[categoryId];
        draftState.currentCategory = categoryId;
        const [category] = state.categoriesNav.filter(
          (category) => category.id === categoryId
        );
        draftState.currentCategoryName = category.name;
      });
      return nextState;
      */
      return state;
    }
    default:
      return state;
  }
};

export { tableReducer };
