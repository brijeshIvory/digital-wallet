import { GetDepositDetailApi, RequestDepositApi } from "../../api/WalletApi";
import { call, all, takeEvery, put } from "redux-saga/effects";
import * as actionType from "../Actions/actionsType";
import { toast } from "react-toastify";

function* GetDepositDetailSaga() {
  const depositDetail = yield call(GetDepositDetailApi);

  const data = depositDetail?.data.data;
  if (depositDetail?.status === 200) {
    yield put({
      type: actionType.GET_DEPOSIT_DETAIL_SUCCESS,
      data,
    });
  } else {
    yield put({
      type: actionType.GET_DEPOSIT_DETAIL_FAIL,
      ErrData: data,
    });
  }
}

function* RequestDepositeSaga(payload) {
  const { depositData } = payload;

  const reqDepositDetail = yield call(RequestDepositApi, depositData);

  if (reqDepositDetail?.data?.ok === true) {
    yield put({
      type: actionType.REQUEST_DEPOSIT_SUCCESS,
      reqDepositDetail,
    });

    toast("Payment done");
  } else {
    yield put({
      type: actionType.REQUEST_DEPOSIT_FAIL,
      ErrData: reqDepositDetail,
    });
    toast(reqDepositDetail?.data?.message);
  }
}

function* DepositSaga() {
  yield all([takeEvery(actionType.DEPOSIT_DETAIL, GetDepositDetailSaga)]);
  yield all([takeEvery(actionType.REQUEST_DEPOSIT, RequestDepositeSaga)]);
}
export default DepositSaga;
