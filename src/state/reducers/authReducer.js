import {
  AUTH_REQUESTED,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOAD_USER,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_PASSWORD_CONFIRMED_SUCCESS,
  AUTH_PASSWORD_CONFIRMED_ERROR,
} from "../types";

const initialState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
  passwordConfirmed: false,
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
    case AUTH_PASSWORD_CONFIRMED_SUCCESS:
      return {
        ...state,
        loading: false,
        passwordConfirmed: true,
      };
    case AUTH_PASSWORD_CONFIRMED_ERROR:
      return {
        ...state,
        loading: false,
        passwordConfirmed: false,
        error: payload,
      };
    case AUTH_ERROR:
    case AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        user: null,
        passwordConfirmed: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
