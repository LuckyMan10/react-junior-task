import axios from "axios";
import {PRODUCTS, BASKET} from './apiUrls';

async function fetchProducts() {
  try {
    const {data} = await axios.get(PRODUCTS);
    return data;
  } catch (e) {
    throw e;
  }
}

async function fetchBasket(basketData: FormData) {
  try {
    console.log('basketData: ', basketData)
    const {data} = await axios.post(BASKET, basketData);
    return data;
  } catch (e) {
    throw e;
  }
}

export { fetchProducts, fetchBasket };
