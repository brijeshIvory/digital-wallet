import { GetDepositDetailApi } from '../../api/DepositApi'
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

function* DepositSaga() {
  yield all([takeEvery(actionType.DEPOSIT_DETAIL, GetDepositDetailSaga)])
}
export default DepositSaga
