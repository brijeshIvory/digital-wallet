import { all } from "redux-saga/effects";
import AuthSaga from "./Sagas/AuthSaga";
import WalletSaga from "./Sagas/WalletSaga";
import DepositSaga from "./Sagas/DepositeSaga";
import TransactionSaga from "./Sagas/TransactionsSaga";
import AdvertismentSaga from "./Sagas/AdvertismentSaga";
import ContactSaga from "./Sagas/ContactSaga";

function* rootSaga() {
  yield all([
    AuthSaga(),
    WalletSaga(),
    DepositSaga(),
    TransactionSaga(),
    AdvertismentSaga(),
    ContactSaga(),
  ]);
}
export default rootSaga;
