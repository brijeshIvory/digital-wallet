import { GetHawalaListApi ,GetClientListApi} from '../../api/WalletApi'
import { call, all, takeEvery, put } from "redux-saga/effects";
import * as actionType from "../Actions/actionsType";
function* GetHawalaListsaga() {
  const hawalaList = yield call(GetHawalaListApi);

  const data = hawalaList?.data.data
  if (hawalaList?.status === 200) {
    yield put({
      type: actionType.GET_HAWALA_LIST_SUCCESS,
      data,
    });
  } else {
    yield put({
      type: actionType.GET_HAWALA_LIST_FAIL,
      ErrData: data,
    });
  }
}
function* GetClientListsaga() {
  const clientList = yield call(GetClientListApi);

  const data = clientList?.data.data
  if (clientList?.status === 200) {
    yield put({
      type: actionType.GET_CLIENT_LIST_SUCCESS,
      data,
    });
  } else {
    yield put({
      type: actionType.GET_CLIENT_LIST_FAIL,
      ErrData: data,
    });
  }
}

function* HawalaSaga() {
  yield all([takeEvery(actionType.HAWALA_LIST, GetHawalaListsaga)]);
  yield all([takeEvery(actionType.CLIENT_LIST, GetClientListsaga)]);

}
export default HawalaSaga;
