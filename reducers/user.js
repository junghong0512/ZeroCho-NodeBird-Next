export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

// ACTION CREATOR(로그인)
export const loginAction = (data) => ({
  type: 'LOG_IN',
  data,
});

// ACTION CREATOR(로그아웃)
export const logoutAction = () => ({
  type: 'LOG_OUT',
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
