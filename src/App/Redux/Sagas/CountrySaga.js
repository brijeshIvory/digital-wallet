import { GetCountryApi } from "../../api/countryApi";
import { call, all, takeEvery, put } from "redux-saga/effects";
import * as actionType from "../Actions/actionsType";
function* getCountries() {
  const countries = yield call(GetCountryApi);

  if (countries?.status === 200) {
    yield put({
      type: actionType.GET_COUNTRY_SUCCESS,
      countries,
    });
  } else {
    yield put({
      type: actionType.GET_COUNTRY_FAIL,
      countriesErrData: countries,
    });
  }
}

function* CountrySaga() {
  yield all([takeEvery(actionType.GET_COUNTRY, getCountries)]);
}
export default CountrySaga;
