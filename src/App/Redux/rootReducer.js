import { combineReducers } from "redux";
import AuthReducer from "./Reducers/AuthReducer";
import DepositReducer from "./Reducers/DepositeReducer";
import HawalaReducer from "./Reducers/HawalaReducer";

const rootReducer = combineReducers({
user:  AuthReducer,
hawala:HawalaReducer,
deposit:DepositReducer,
});

export default rootReducer;
