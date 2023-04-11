import { GetAdvertismentApi } from "../../api/advertismentApi";
import { call, all, takeEvery, put } from "redux-saga/effects";
import * as actionType from "../Actions/actionsType";
function* getAdvertisment() {
  const advertisment = yield call(GetAdvertismentApi);

  if (advertisment?.status === 200) {
    yield put({
      type: actionType.GET_ADVERTISMENT_SUCCESS,
      advertisment,
    });
  } else {
    yield put({
      type: actionType.GET_ADVERTISMENT_FAIL,
      advertismentErrData: advertisment,
    });
  }
}

function* AdvertismentSaga() {
  yield all([takeEvery(actionType.GET_ADVERTISMENT, getAdvertisment)]);
}
export default AdvertismentSaga;
