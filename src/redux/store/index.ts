import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {tableReducer} from 'redux/reducer';
import {watchGetProducts} from 'redux/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  table: tableReducer
})

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchGetProducts);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
