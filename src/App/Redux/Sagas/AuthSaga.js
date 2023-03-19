import {
  UserRegistrationApi,
  SendOtpApi,
  GetUserDetailApi,
  VerifyOtpApi,
  UserLoginApi,
  ForgetPasswordApi
} from "../../api/authApi";
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
function* userLogin(payload) {
  const { loggedData } = payload;
  const loginData = yield call(UserLoginApi, loggedData);

  if (loginData?.status === 200) {
    yield put({
      type: actionType.USER_LOGIN_SUCCESS,
      loginData,
    });
  } else {
    yield put({
      type: actionType.USER_LOGIN_FAIL,
      loginErrData: loginData,
    });
  }
}
function* sendOtp(payload) {
  const { otp } = payload;
  const otpData = yield call(SendOtpApi, otp);
}

function* verifyOtp(payload) {
  const { otpData } = payload;
  const otpResp = yield call(VerifyOtpApi, otpData);
  if (otpResp?.status === 200) {
    yield put({
      type: actionType.VERIFY_OTP_SUCCESS,
      otpResp,
    });
  } else {
    yield put({
      type: actionType.VERIFY_OTP_FAIL,
      otpRespErr: otpResp,
    });
  }
}
function* GetUserDetailsSaga(payload) {
  const { userdetailData } = payload;
  const userDetails = yield call(GetUserDetailApi, userdetailData);
  const data = userDetails?.data.data;
  if (userDetails?.status === 200) {
    yield put({
      type: actionType.GET_USER_DETAILS_SUCCESS,
      data,
    });
  } else {
    yield put({
      type: actionType.GET_USER_DETAILS_FAIL,
      ErrData: data,
    });
  }
}

function* forgetPassword(payload){
  const {ForgetPasswordDetails} = payload
  const ForgotPassDetail = yield call(ForgetPasswordApi, ForgetPasswordDetails)

}

function* AuthSaga() {
  yield all([takeEvery(actionType.USER_REGISTRATION, userRegistration)]);
  yield all([takeEvery(actionType.SEND_OTP, sendOtp)]);
  yield all([takeEvery(actionType.VERIFY_OTP, verifyOtp)]);
  yield all([takeEvery(actionType.GET_USER_DETAILS, GetUserDetailsSaga)]);
  yield all([takeEvery(actionType.USER_LOGIN, userLogin)]);
  yield all([takeEvery(actionType.USER_REGISTRATION, userRegistration)])
  yield all([takeEvery(actionType.FORGET_PASSWORD, forgetPassword)])

}
export default AuthSaga;
