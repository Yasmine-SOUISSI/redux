const initialeState = {
  user: {
    name: "",
    email: "",
  },
  error: null,
  loading: false,
  response: null,
  users: [],
};

export const userReducer = (state = initialeState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "GET_USER_BY_ID":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
