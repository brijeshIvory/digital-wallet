import {
  GetHawalaListApi,
  GetClientListApi,
  GetCountryApi,
  GetWallwtBalanceApi,
  WithDrawRequestApi,
  ThridPartyTransactionApi,
} from '../../api/WalletApi'
import { call, all, takeEvery, put } from 'redux-saga/effects'
import * as actionType from '../Actions/actionsType'

function* getCountries() {
  const countries = yield call(GetCountryApi)

  if (countries?.status === 200) {
    yield put({
      type: actionType.GET_COUNTRY_SUCCESS,
      countries,
    })
  } else {
    yield put({
      type: actionType.GET_COUNTRY_FAIL,
      countriesErrData: countries,
    })
  }
}

function* GetHawalaListsaga() {
  const hawalaList = yield call(GetHawalaListApi)

  const data = hawalaList?.data.data
  if (hawalaList?.status === 200) {
    yield put({
      type: actionType.GET_HAWALA_LIST_SUCCESS,
      data,
    })
  } else {
    yield put({
      type: actionType.GET_HAWALA_LIST_FAIL,
      ErrData: data,
    })
  }
}
function* GetClientListsaga() {
  const clientList = yield call(GetClientListApi)

  const data = clientList?.data.data
  if (clientList?.status === 200) {
    yield put({
      type: actionType.GET_CLIENT_LIST_SUCCESS,
      data,
    })
  } else {
    yield put({
      type: actionType.GET_CLIENT_LIST_FAIL,
      ErrData: data,
    })
  }
}

function* GetWalletBalanceSaga(payload) {
  const { walletData } = payload
  const walletBalData = yield call(GetWallwtBalanceApi, walletData)
  const data = walletBalData?.data.data
  if (walletBalData.data.ok === true) {
    yield put({
      type: actionType.GET_WALLET_BALANCE_SUCCESS,
      data,
    })
  } else {
    yield put({
      type: actionType.GET_WALLET_BALANCE_FAIL,
      ErrData: walletBalData,
    })
  }
}
function* WithDrawRequestSaga(payload) {
  const { withDrawData } = payload
  const withDrawDataRes = yield call(WithDrawRequestApi, withDrawData)
  const data = withDrawDataRes?.data.data
  if (withDrawDataRes.data.ok === true) {
    yield put({
      type: actionType.WITHDRAW_REQUEST_SUCCESS,
      data,
    })
  } else {
    yield put({
      type: actionType.WITHDRAW_REQUEST_FAIL,
      ErrData: withDrawDataRes,
    })
  }
}

function* ThirdPartyTransactionSaga(payload) {
  const { TransData } = payload
  const TransDataRes = yield call(ThridPartyTransactionApi, TransData)
  const data = TransDataRes?.data.data
  if (TransDataRes.data.ok === true) {
    yield put({
      type: actionType.THIRD_PARTY_TRANSACTION_SUCCESS,
      data,
    })
  } else {
    yield put({
      type: actionType.THIRD_PARTY_TRANSACTION_FAIL,
      ErrData: TransDataRes,
    })
  }
}

function* WalletSaga() {
  yield all([takeEvery(actionType.GET_COUNTRY, getCountries)])
  yield all([takeEvery(actionType.HAWALA_LIST, GetHawalaListsaga)])
  yield all([takeEvery(actionType.CLIENT_LIST, GetClientListsaga)])
  yield all([takeEvery(actionType.GET_WALLET_BALANCE, GetWalletBalanceSaga)])
  yield all([takeEvery(actionType.WITHDRAW_REQUEST, WithDrawRequestSaga)])
  yield all([takeEvery(actionType.THIRD_PARTY_TRANSACTION, ThirdPartyTransactionSaga)])
}
export default WalletSaga
