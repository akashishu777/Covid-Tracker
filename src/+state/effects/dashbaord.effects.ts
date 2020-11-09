import { call, put } from 'redux-saga/effects';
import * as postActions from '../actions/dashbaord.actions';
import { api } from './api';

function getCovidData() {
  const url = 'https://api.covid19api.com/summary';
  return api(url);
}

export function* getCodivSaga() {
  let payload;
  try {
    const response = yield call(getCovidData);
    payload = response;
    yield put(postActions.createCovidSuccess(payload));

  } catch(error) {
    payload = error;
    yield put(postActions.createCovidError(payload));

  }
}