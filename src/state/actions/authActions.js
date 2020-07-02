import {
  API_CALL_BEGAN,
  AUTH_REQUESTED,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_LOAD_USER,
  CLEAR_PROFILE,
  CLEAR_USER_CELLGROUP,
  CLEAR_USER_MEMBERS,
  AUTH_PASSWORD_CONFIRMED_SUCCESS,
  AUTH_PASSWORD_CONFIRMED_ERROR,
} from "../types";

const clearError = (dispatch, action = AUTH_ERROR, timeout = 3000) => {
  setTimeout(
    () =>
      dispatch({
        type: action,
        payload: null,
      }),
    timeout
  );
};

// load user
export const loadUser = () => async (dispatch) => {
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/auth/me",
      onStart: AUTH_REQUESTED,
      onSuccess: AUTH_LOAD_USER,
      onError: AUTH_ERROR,
      expectError: false,
    },
  });
};

// register user
export const register = (formData) => async (dispatch) => {
  const { name, email, password, leader } = formData;
  const data = { name, email, password, leader };
  const afterSuccess = () => dispatch(loadUser());
  const afterError = () => clearError(dispatch);

  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/auth/registerWithLeader",
      method: "post",
      data,
      onStart: AUTH_REQUESTED,
      onSuccess: AUTH_REGISTER_SUCCESS,
      onError: AUTH_ERROR,
      afterSuccess,
      afterError,
      expectError: true,
    },
  });
};

// log in user
export const login = ({ email, password }) => async (dispatch) => {
  const data = { email, password };
  const afterSuccess = () => dispatch(loadUser());
  const afterError = () => clearError(dispatch);

  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/auth/login",
      method: "post",
      data,
      onStart: AUTH_REQUESTED,
      onSuccess: AUTH_LOGIN_SUCCESS,
      onError: AUTH_ERROR,
      afterSuccess,
      afterError,
      expectError: true,
    },
  });
};

// password confirm
export const confirmPassword = (password, callback) => async (dispatch) => {
  const data = { password };
  const afterSuccess = () => callback();
  const afterError = () => clearError(dispatch, AUTH_PASSWORD_CONFIRMED_ERROR);

  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/auth/passwordconfirm",
      method: "post",
      data,
      onStart: AUTH_REQUESTED,
      onSuccess: AUTH_PASSWORD_CONFIRMED_SUCCESS,
      onError: AUTH_PASSWORD_CONFIRMED_ERROR,
      afterSuccess,
      afterError,
      expectError: true,
    },
  });
};

// google login
export const googleLogin = () => (dispatch) => {
  window.open("http://localhost:5000/api/v1/auth/google", "_self");
};

// logout and clear everything
export const logout = (history, path) => (dispatch) => {
  const afterSuccess = () => {
    dispatch({
      type: AUTH_LOGOUT,
    });

    dispatch({
      type: CLEAR_PROFILE,
    });
    dispatch({
      type: CLEAR_USER_CELLGROUP,
    });
    dispatch({
      type: CLEAR_USER_MEMBERS,
    });

    history.push(path);
  };

  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/auth/logout",
      method: "get",
      onStart: AUTH_REQUESTED,
      onError: AUTH_ERROR,
      afterSuccess,
    },
  });
};
