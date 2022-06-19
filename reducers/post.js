export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'junghong',
      },
      content: '첫번째 게시글 입니다. #정홍 #첫번째 게시글',
      Images: [
        {
          src: 'https://i.pinimg.com/564x/a3/ee/ea/a3eeeafd9a595102ca41e11ebc3eeef8.jpg',
        },
        {
          src: 'https://i.pinimg.com/564x/18/0e/c1/180ec17fe05df1dda7ea86a62694322a.jpg',
        },
        // {
        //   src: 'https://i.pinimg.com/564x/04/79/64/04796444135b5b89b28000375128fe79.jpg',
        // },
      ],
      Comments: [
        {
          User: {
            nickname: 'User 11',
          },
          content: 'comment content test 13',
        },
        {
          User: {
            nickname: 'User 12',
          },
          content: 'comment content test 13123',
        },
        {
          User: {
            nickname: 'User 13',
          },
          content: 'comment content test 13312312',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: 'Dummy Data',
  User: {
    id: 2,
    nickname: 'user 3',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
