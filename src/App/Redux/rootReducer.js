import { combineReducers } from "redux";
import AuthReducer from "./Reducers/AuthReducer";
import HawalaReducer from "./Reducers/HawalaReducer";

const rootReducer = combineReducers({
  AuthReducer,
  HawalaReducer,
});

export default rootReducer;
