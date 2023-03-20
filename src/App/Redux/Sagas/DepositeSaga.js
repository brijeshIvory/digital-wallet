import { GetDepositDetailApi, RequestDepositApi } from '../../api/WalletApi'
import { call, all, takeEvery, put } from 'redux-saga/effects'
import * as actionType from '../Actions/actionsType'
function* GetDepositDetailSaga() {
  const depositDetail = yield call(GetDepositDetailApi)

  const data = depositDetail?.data.data
  if (depositDetail?.status === 200) {
    yield put({
      type: actionType.GET_DEPOSIT_DETAIL_SUCCESS,
      data,
    })
  } else {
    yield put({
      type: actionType.GET_DEPOSIT_DETAIL_FAIL,
      ErrData: data,
    })
  }
}


function* RequestDepositeSaga(payload) {
  const { depositData } = payload;
  const depositDetail = yield call(RequestDepositApi,depositData)
  if (depositDetail?.status === 201) {
    yield put({
      type: actionType.REQUEST_DEPOSIT_SUCCESS,
      depositDetail,
    });
  } else {
    yield put({
      type: actionType.REQUEST_DEPOSIT_FAIL,
      ErrData: depositDetail,
    });
  }
}

function* DepositSaga() {
  yield all([takeEvery(actionType.DEPOSIT_DETAIL, GetDepositDetailSaga)])
  yield all([takeEvery(actionType.REQUEST_DEPOSIT, RequestDepositeSaga)])
}
export default DepositSaga
