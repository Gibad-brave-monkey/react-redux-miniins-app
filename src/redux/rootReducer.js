import { combineReducers } from "redux";

import { inputReducer } from "./inputReducer";
import { likesReducer } from "./likeReducer";
import { commentsReducer } from './commentsReducer.js';
import { appReducer } from "./appReducer";


export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
  appReducer
});