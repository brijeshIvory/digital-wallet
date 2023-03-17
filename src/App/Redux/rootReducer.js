import { combineReducers } from "redux";
import AuthReducer from "./Reducers/AuthReducer";
import DepositReducer from "./Reducers/DepositeReducer";
import HawalaReducer from "./Reducers/HawalaReducer";
import CountryReducer from "./Reducers/CountryReducer";

const rootReducer = combineReducers({
  user: AuthReducer,
  hawala: HawalaReducer,
  deposit: DepositReducer,
  country: CountryReducer,
});

export default rootReducer;
