import {
  all,
  call,
  put,
  takeEvery,
  fork,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { fetchProducts, fetchBasket } from "redux/http";
import { receivedCategory } from "redux/reducer/table/types";
import { basket } from "redux/http/types";

function getProducts() {
  return { type: "GET_PRODUCTS" };
}

function addBasket(basketData: FormData) {
  return {
    type: "ADD_BASKET",
    basketData,
  };
}

function* watchGetProducts() {
  yield takeEvery("GET_PRODUCTS", getProductsAsync);
}
function* watchAddBasket() {
  yield takeEvery("ADD_BASKET", addBasketAsync);
}

function* getProductsAsync():
  | Generator<CallEffect<receivedCategory>>
  | PutEffect<{ type: string; payload: unknown }> {
  try {
    const response = yield call(fetchProducts);
    yield put({ type: "SET_PRODUCTS", payload: response });
  } catch (e) {
    yield put({ type: "SET_PRODUCTS_ERROR" });
  }
}

function* addBasketAsync({
  type,
  payload,
}: {
  type: string;
  payload: FormData;
}): Generator<CallEffect<basket>> | PutEffect<{ type: string }> {
  try {
    const response = yield call(fetchBasket, payload);
    yield console.log("response from server: ", response);
  } catch (e) {
    yield put({ type: "ADD_BASKET_ERROR" });
  }
}

function* rootSaga() {
  yield all([fork(watchGetProducts), fork(watchAddBasket)]);
}

export { getProducts, addBasket, rootSaga };
