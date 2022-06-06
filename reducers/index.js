import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
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

// (이전상태, 액션) ==> 다음상태 생성
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
