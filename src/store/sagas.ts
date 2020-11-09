import { all, takeLatest } from 'redux-saga/effects';

import { ActionTypes as fromCovidActionTypes } from '../+state/actions/dashbaord.actions';
import * as fromCovid from '../+state/effects/dashbaord.effects';


export function* watcherSaga() {
  yield all([
    takeLatest(fromCovidActionTypes.COVID_GET_INIT, fromCovid.getCodivSaga)
  ])
}