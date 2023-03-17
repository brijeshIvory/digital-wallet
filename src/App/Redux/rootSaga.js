import { all } from "redux-saga/effects";
import AuthSaga from "./Sagas/AuthSaga";
// import HawalaSaga from "./Sagas/HawalaSaga";
import CountrySaga from "./Sagas/CountrySaga";
import HawalaSaga from "./Sagas/HawalaSaga";
import DepositSaga from "./Sagas/DepositeSaga";
function* rootSaga() {
  yield all([AuthSaga(), HawalaSaga(), DepositSaga(), CountrySaga()]);
}
export default rootSaga;
