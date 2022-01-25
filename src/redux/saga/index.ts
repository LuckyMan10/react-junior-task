import { call, put, takeEvery } from "redux-saga/effects";
import {fetchProducts} from "redux/http";

function getProducts() {
  return {type: "GET_PRODUCTS"}
}

function* watchGetProducts() {
  yield takeEvery("GET_PRODUCTS", getProductsAsync)
}

function* getProductsAsync(): any {
  try {
    const response = yield call(fetchProducts);
    yield put({type: "SET_PRODUCTS", payload: response})
  } catch(e) {
    yield put({type: "SET_PRODUCTS_ERROR"});
  }
}

export {getProducts, watchGetProducts};