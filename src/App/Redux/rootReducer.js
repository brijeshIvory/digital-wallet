import { combineReducers } from "redux";
import AuthReducer from "./Reducers/AuthReducer";
import DepositReducer from "./Reducers/DepositeReducer";
import CashDepositReducer from "./Reducers/CashDepositReducer";
import CountryReducer from "./Reducers/CountryReducer";
import WalletReducer from "./Reducers/WalletReducer";
import TransactionReducer from "./Reducers/TransactionReducer";
import AdvertismentReducer from "./Reducers/AdvertismentReducer";

const rootReducer = combineReducers({
  user: AuthReducer,
  CashDeposit: CashDepositReducer,
  deposit: DepositReducer,
  country: CountryReducer,
  wallet: WalletReducer,
  transactionData: TransactionReducer,
  advertisment: AdvertismentReducer,
});

export default rootReducer;
