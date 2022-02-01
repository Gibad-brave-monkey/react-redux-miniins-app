import { combineReducers } from "redux";

import { inputReducer } from "./inputReducer";
import { likesReducer } from "./likeReducer";
import { commentsReducer } from './commentsReducer.js';


export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer
});