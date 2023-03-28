import { all } from "redux-saga/effects";
import AuthSaga from "./Sagas/AuthSaga";
import WalletSaga from "./Sagas/WalletSaga";
import DepositSaga from "./Sagas/DepositeSaga";
import TransactionSaga from "./Sagas/TransactionsSaga";
import AdvertismentSaga from "./Sagas/AdvertismentSaga";
function* rootSaga() {
  yield all([
    AuthSaga(),
    WalletSaga(),
    DepositSaga(),
    TransactionSaga(),
    AdvertismentSaga(),
  ]);
}
export default rootSaga;
