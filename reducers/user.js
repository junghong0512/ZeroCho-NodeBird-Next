export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axios
      .post('/api/login')
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginRequestFailure(err));
      });
  };
};

// ACTION CREATOR(로그인 요청)
export const loginRequestAction = (data) => ({
  type: 'LOG_IN_REQUEST',
  data,
});

// 두 액션은 Saga가 호출하는 액션이기 떄문에 필요없음
// // ACTION CREATOR(로그인 성공)
// export const loginSuccessAction = (data) => ({
//   type: 'LOG_IN_SUCCESS',
//   data,
// });
// // ACTION CREATOR(로그인 실패)
// export const loginFailureAction = (data) => ({
//   type: 'LOG_IN_FAILURE',
//   data,
// });

// ACTION CREATOR(로그아웃 요청)
export const logoutRequestAction = () => ({
  type: 'LOG_OUT_REQUEST',
});
// ACTION CREATOR(로그아웃 성공)
export const logoutSuccessAction = () => ({
  type: 'LOG_OUT_SUCCESS',
});
// ACTION CREATOR(로그아웃 실패)
export const logoutFailureAction = () => ({
  type: 'LOG_OUT_FAILURE',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        isLoggingIn: true,
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'junghong' },
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
      };
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true,
      };
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut: false,
        me: null,
      };
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggingOut: false,
      };
    default:
      return state;
  }
};

export default reducer;
