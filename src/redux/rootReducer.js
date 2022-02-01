import { combineReducers } from "redux";

import { inputReducer } from "./inputReducer";
import { likesReducer } from "./likeReducer";


export const rootReducer = combineReducers({
  likesReducer,
  inputReducer
});