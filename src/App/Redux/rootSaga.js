import { all } from "redux-saga/effects";
import AuthSaga from "./Sagas/AuthSaga";
// import HawalaSaga from "./Sagas/HawalaSaga";
import CountrySaga from "./Sagas/CountrySaga";

function* rootSaga() {
  yield all([AuthSaga(), CountrySaga()]);
}
export default rootSaga;
