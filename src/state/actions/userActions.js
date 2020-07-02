import {
  API_CALL_BEGAN,
  USER_REQUESTED,
  GET_USERS_SUCCESS,
  USER_ERROR,
  UPDATE_USER_ROLE_SUCCESS,
} from "../types";

// GET ALL USERS
export const getUsers = (params = {}) => (dispatch) => {
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/user",
      params,
      onStart: USER_REQUESTED,
      onSuccess: GET_USERS_SUCCESS,
      onError: USER_ERROR,
    },
  });
};

// Update user's role
export const updateUserRole = (role, userId, callback) => (dispatch) => {
  const afterSuccess = () => {
    if (callback) callback();
  };

  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: `/api/v1/user/${userId}/role`,
      method: "put",
      data: { role },
      onStart: USER_REQUESTED,
      onSuccess: UPDATE_USER_ROLE_SUCCESS,
      onError: USER_ERROR,
      afterSuccess,
    },
  });
};
