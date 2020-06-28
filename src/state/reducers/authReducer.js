import {
  AUTH_REQUESTED,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOAD_USER,
  AUTH_ERROR,
  AUTH_LOGOUT,
} from "../types";

const initialState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.data.user,
      };
    case AUTH_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case AUTH_REGISTER_SUCCESS:
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        user: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
