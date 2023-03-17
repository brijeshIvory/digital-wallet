import { GetUserDetailApi, UserRegistrationApi } from '../../api/authApi'
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

function* GetUserDetailsSaga(payload) {
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
function* AuthSaga() {
  yield all([takeEvery(actionType.USER_REGISTRATION, userRegistration)])
  yield all([takeEvery(actionType.GET_USER_DETAILS, GetUserDetailsSaga)])
}
export default AuthSaga
