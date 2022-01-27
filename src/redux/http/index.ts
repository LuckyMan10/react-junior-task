import axios from "axios";
import { PRODUCTS, BASKET } from "./apiUrls";
import { receivedCategory } from "redux/reducer/table/types";
import { basket } from "./types";

async function fetchProducts() {
  try {
    const { data } = await axios.get(PRODUCTS);
    return data as receivedCategory;
  } catch (e) {
    throw e;
  }
}

async function fetchBasket(basketData: FormData) {
  try {
    const { data } = await axios.post(BASKET, basketData);
    return data as basket;
  } catch (e) {
    throw e;
  }
}

export { fetchProducts, fetchBasket };
