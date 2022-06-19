import {
  all,
  fork,
  take,
  put,
  delay,
  throttle,
  takeEvery,
  debounce,
  takeLatest,
  takeLeading,
  takeMaybe,
} from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data);
}
function logOutAPI() {
  return axios.post('/api/logout');
}
function addPostAPI(data) {
  return axios.post('/add/post', data);
}

// yield 를 붙여주는 이유: test를 할때 순차적인 실행을 확인할 수 있다

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data); // call 은 동기적 요청 (fork는 비동기적: 요청 결과를 기다려주지 않음)
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    });
  }
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
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

function* addPost(action) {
  try {
    const result = yield call(addPost, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: error.response.data,
    });
  }
}

function* watchLogin() {
  yield take('LOG_IN_REQUEST', logIn); // LOG_IN action 있으면 logIn generator 함수 실행
}

function* watchLogout() {
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchAddPost)]);
}
