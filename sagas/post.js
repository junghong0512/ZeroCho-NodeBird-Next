import { all, delay, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function addPostAPI(data) {
  return axios.post('/add/post', data);
}

// yield 를 붙여주는 이유: test를 할때 순차적인 실행을 확인할 수 있다

function* addPost(action) {
  try {
    // const result = yield call(addPost, action.data);
    yield delay(1000);
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

function* watchAddPost() {
  // yield throttle('ADD_POST_REQUEST', addPost, 4000);
  yield takeLatest('ADD_POST_REQUEST', addPost, 4000);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
