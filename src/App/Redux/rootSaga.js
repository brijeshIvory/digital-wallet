import { all } from "redux-saga/effects";
import AuthSaga from "./Sagas/AuthSaga";
import WalletSaga from "./Sagas/WalletSaga";
import DepositSaga from "./Sagas/DepositeSaga";
function* rootSaga() {
  yield all([AuthSaga(), WalletSaga(), DepositSaga()]);
}
export default rootSaga;
