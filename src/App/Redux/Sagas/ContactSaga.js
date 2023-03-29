import { GetDetailsApi } from "../../api/contactApi";
import { call, all, takeEvery, put } from "redux-saga/effects";
import * as actionType from "../Actions/actionsType";
function* getContactDetail() {
  const detail = yield call(GetDetailsApi);

  if (detail?.status === 200) {
    yield put({
      type: actionType.GET_CONTACT_DETAILS_SUCCESS,
      detail,
    });
  } else {
    yield put({
      type: actionType.GET_CONTACT_DETAILS_FAIL,
      detailErrData: detail,
    });
  }
}

function* ContactSaga() {
  yield all([takeEvery(actionType.GET_CONTACT_DETAILS, getContactDetail)]);
}
export default ContactSaga;
