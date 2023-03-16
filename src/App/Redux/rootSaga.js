import { all } from "redux-saga/effects";
import AuthSaga from "./Sagas/AuthSaga";
import HawalaSaga from "./Sagas/HawalaSaga";

function* rootSaga() {
  yield all([AuthSaga(), HawalaSaga()]);
}
export default rootSaga;
