const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false,
  userType: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };

    case "SIGN_UP_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "SIGN_IN":
      return {
        ...state,
        user: action.payload[0],
        userType: action.payload[0].type,
        token: action.payload[0].id,
        error: null,
        loading: false,
      };

    case "SIGN_IN_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        userType: null,
        error: null,
        token: null,
        loading: false,
      };

    case "SIGN_OUT_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "CURRENT_USER":
      return {
        ...state,
        user: action.payload[0],
        userType: action.payload[0].type,
        token: action.payload[0].id,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};
