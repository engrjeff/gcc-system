import {
  PROFILE_REQUESTED,
  GET_PROFILE_SUCCESS,
  SAVE_PROFILE_SUCCESS,
  PROFILE_ERROR,
  CLEAR_PROFILE,
} from "../types";

const initialState = {
  loading: false,
  profile: null,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
    case SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload.data.profile,
        error: null,
      };
    case PROFILE_ERROR:
    case CLEAR_PROFILE:
      return {
        ...state,
        loading: false,
        profile: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
