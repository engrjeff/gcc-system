import { showAlert } from "../actions/alertActions";
import {
  API_CALL_BEGAN,
  PROFILE_REQUESTED,
  GET_PROFILE_SUCCESS,
  SAVE_PROFILE_SUCCESS,
  PROFILE_ERROR,
  CLEAR_PROFILE,
} from "../types";

// get current user's profile
export const getProfile = () => (dispatch) => {
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/profile/me",
      onStart: PROFILE_REQUESTED,
      onSuccess: GET_PROFILE_SUCCESS,
      onError: PROFILE_ERROR,
    },
  });
};

// save (create or update) current user's profile
export const saveProfile = (profile, isUpdate, history, redirectPath) => (
  dispatch
) => {
  const afterSuccess = () => {
    const alert = {
      content: isUpdate ? "Profile updated!" : "Profile created!",
      type: isUpdate ? "success" : "info",
    };
    dispatch(showAlert(alert));
    // history.push(redirectPath);
  };
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/profile",
      method: "post",
      data: profile,
      onStart: PROFILE_REQUESTED,
      onSuccess: SAVE_PROFILE_SUCCESS,
      onError: PROFILE_ERROR,
      afterSuccess,
    },
  });
};

export const clearUserProfile = () => (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
};
