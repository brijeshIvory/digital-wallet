import { combineReducers } from "redux";
import AuthReducer from "./Reducers/AuthReducer";
import HawalaReducer from "./Reducers/HawalaReducer";
import CountryReducer from "./Reducers/CountryReducer";

const rootReducer = combineReducers({
  AuthReducer,
  HawalaReducer,
  CountryReducer,
});

export default rootReducer;
