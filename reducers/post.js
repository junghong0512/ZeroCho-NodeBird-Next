import shortid from 'shortid';

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

  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'user 3',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'junghong',
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };

    case ADD_COMMENT_REQUEST:
      const postIndex = state.mainPosts.findIndex(
        (v) => v.id === action.data.postId,
      );
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [dummyComment(action.data.content), ...post.Comments];

      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;

      return {
        ...state,
        mainPosts,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
