import { UserRegistrationApi, SendOtpApi } from "../../api/authApi";
import { call, all, takeEvery, put } from "redux-saga/effects";
import * as actionType from "../Actions/actionsType";
function* userRegistration(payload) {
  const { registratedData } = payload;
  const regData = yield call(UserRegistrationApi, registratedData);

  if (regData?.status === 200) {
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

function* sendOtp(payload) {
  const { otp } = payload;
  const otpData = yield call(SendOtpApi, otp);
}
function* verifyOtp(payload) {
  const { otpData } = payload;
  const otpResp = yield call(SendOtpApi, otpData);
}
function* AuthSaga() {
  yield all([takeEvery(actionType.USER_REGISTRATION, userRegistration)]);
  yield all([takeEvery(actionType.SEND_OTP, sendOtp)]);
  yield all([takeEvery(actionType.VERIFY_OTP, verifyOtp)]);
}
export default AuthSaga;
