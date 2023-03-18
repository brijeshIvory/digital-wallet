import { GetUserDetailApi, UserRegistrationApi, ForgetPasswordApi } from '../../api/authApi'
import { call, all, takeEvery, put } from 'redux-saga/effects'
import * as actionType from '../Actions/actionsType'
function* userRegistration(payload) {
  const { registratedData } = payload
  const regData = yield call(UserRegistrationApi, registratedData)
  if (regData?.status === 201) {
    yield put({
      type: actionType.USER_REGISTRATION_SUCCESS,
      regData,
    })
  } else {
    yield put({
      type: actionType.USER_REGISTRATION_FAIL,
      regErrData: regData,
    })
  }
}

function* GetUserDetails(payload) {
  const { userdetailData } = payload
  const userDetails = yield call(GetUserDetailApi, userdetailData)
  const data = userDetails?.data.data
  if (userDetails?.status === 200) {
    yield put({
      type: actionType.GET_USER_DETAILS_SUCCESS,
      data,
    })
  } else {
    yield put({
      type: actionType.GET_USER_DETAILS_FAIL,
      ErrData: data,
    })
  }
}

function* forgetPassword(payload){
  const {ForgetPasswordDetails} = payload
  const ForgotPassDetail = yield call(ForgetPasswordApi, ForgetPasswordDetails)

}

function* AuthSaga() {
  yield all([takeEvery(actionType.USER_REGISTRATION, userRegistration)])
  yield all([takeEvery(actionType.GET_USER_DETAILS, GetUserDetails)])
  yield all([takeEvery(actionType.FORGET_PASSWORD, forgetPassword)])

}
export default AuthSaga
