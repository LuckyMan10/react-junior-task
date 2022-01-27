import axios from "axios";

const PRODUCTS = "https://datainlife.ru/junior_task/get_products.php";
const BASKET = "https://datainlife.ru/junior_task/add_basket.php";

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
