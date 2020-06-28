import {
  MEMBERS_REQUESTED,
  MEMBERS_ERROR,
  GET_MEMBERS_SUCCESS,
  CREATE_MEMBER_SUCCESS,
  DELETE_MEMBER_SUCCESS,
  CLEAR_USER_MEMBERS,
} from "../types";

const initialState = {
  loading: false,
  allMembers: {},
  members: {},
  error: null,
};

const cellMemberReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MEMBERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: { ...payload },
        error: null,
      };
    case CREATE_MEMBER_SUCCESS:
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case MEMBERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_USER_MEMBERS:
      return {
        ...state,
        loading: false,
        error: null,
        members: {},
      };
    default:
      return state;
  }
};

export default cellMemberReducer;
