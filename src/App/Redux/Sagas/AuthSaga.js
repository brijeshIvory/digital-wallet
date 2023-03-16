import { UserRegistrationApi } from "../../api/authApi";
import { call, all, takeEvery, put } from "redux-saga/effects";
import * as actionType from "../Actions/actionsType";
function* userRegistration(payload) {
  const { registratedData } = payload;
  const regData = yield call(UserRegistrationApi, registratedData);
  if (regData?.status === 201) {
    yield put({
      type: actionType.USER_REGISTRATION_SUCCESS,
      regData,
    });
  } else {
    yield put({
      type: actionType.USER_REGISTRATION_FAIL,
      regErrData: regData,
    });
  }
}

function* AuthSaga() {
  yield all([takeEvery(actionType.USER_REGISTRATION, userRegistration)]);
}
export default AuthSaga;
