import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import * as postActions from '../actions/dashbaord.actions';

const url = 'https://api.covid19api.com/summary';

function getPosts() {
  return axios({
    method: 'get',
    url
  });
}

export function* getCodivSaga() {
  let payload;
  try {
    const response = yield call(getPosts);
    payload = response.data;
    yield put(postActions.createCovidSuccess(payload));

  } catch(error) {
    payload = error;
    yield put(postActions.createCovidError(payload));

  }
}