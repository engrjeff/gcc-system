import {
  CELL_GROUPS_REQUESTED,
  CELL_GROUP_ERROR,
  GET_CELL_GROUPS_SUCCESS,
  GET_CURRENT_USER_CELL_GROUPS_SUCCESS,
  CLEAR_USER_CELLGROUP,
  ADD_CELL_GROUP_MEMBER,
  DELETE_CELL_GROUP_MEMBER,
} from "../types";

const initialState = {
  loading: false,
  cellgroups: {},
  userCellgroups: {},
  error: {},
};

const cellGroupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CELL_GROUPS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_CELL_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        cellgroups: { ...payload },
        error: null,
      };
    case GET_CURRENT_USER_CELL_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        userCellgroups: { ...payload },
        error: null,
      };
    case CELL_GROUP_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_CELL_GROUP_MEMBER:
      return {
        ...state,
        loading: false,
      };
    case DELETE_CELL_GROUP_MEMBER:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_USER_CELLGROUP:
      return {
        ...state,
        loading: false,
        userCellgroups: {},
        error: null,
      };
    default:
      return state;
  }
};

export default cellGroupReducer;
