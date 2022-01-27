import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { tableReducer } from "redux/reducer/table";
import { cartReducer } from "redux/reducer/cart";
import { rootSaga } from "redux/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  table: tableReducer,
  cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
