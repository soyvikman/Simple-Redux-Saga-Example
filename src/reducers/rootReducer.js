import { combineReducers } from "redux";
import entradasReducer from "./entradasReducer";

const rootReducer = combineReducers({
  entradas: entradasReducer
});

export default rootReducer;
