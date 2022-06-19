export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  return (dispatch) => {
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
// ACTION CREATOR(로그인 성공)
export const loginSuccessAction = (data) => ({
  type: 'LOG_IN_SUCCESS',
  data,
});
// ACTION CREATOR(로그인 실패)
export const loginFailureAction = (data) => ({
  type: 'LOG_IN_FAILURE',
  data,
});

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
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
