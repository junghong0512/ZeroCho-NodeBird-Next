import { all, delay, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data);
}

// takeLatest: 요청 자체는 취소할 수 없으므로, Backend 에서 같은 요청이 두번 올 경우 예외처리를 해줘야한다
// 실무에서는 주로 takeLatest를 사용하고, 예외처리는 Backend에서 한다

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data); // call 은 동기적 요청 (fork는 비동기적: 요청 결과를 기다려주지 않음)
    yield delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data,
    });
  }
}
function* watchLogin() {
  yield takeLatest('LOG_IN_REQUEST', logIn); // LOG_IN action 있으면 logIn generator 함수 실행
}

function* watchLogout() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
