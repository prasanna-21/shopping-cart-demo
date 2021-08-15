import { combineReducers } from "redux";
import { ProductsReducer, selectedProductReducer } from "./productReducers";

export const reducers = combineReducers({
  allProducts: ProductsReducer,
  product: selectedProductReducer,
});
