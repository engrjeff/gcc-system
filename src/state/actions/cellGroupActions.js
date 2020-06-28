import { showAlert } from "./alertActions";
import {
  API_CALL_BEGAN,
  CELL_GROUPS_REQUESTED,
  CELL_GROUP_ERROR,
  GET_CELL_GROUPS_SUCCESS,
  GET_CURRENT_USER_CELL_GROUPS_SUCCESS,
  CLEAR_USER_CELLGROUP,
  CREATE_CELL_GROUP_SUCCESS,
  ADD_CELL_GROUP_MEMBER,
  DELETE_CELL_GROUP_MEMBER,
} from "../types";

// Get all cell groups
export const getAllCellGroups = () => async (dispatch) => {
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/cellgroup",
      onStart: CELL_GROUPS_REQUESTED,
      onSuccess: GET_CELL_GROUPS_SUCCESS,
      onError: CELL_GROUP_ERROR,
    },
  });
};

// Get current user's cell groups
export const getCurrentUserCellGroups = () => async (dispatch) => {
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/cellgroup/me",
      onStart: CELL_GROUPS_REQUESTED,
      onSuccess: GET_CURRENT_USER_CELL_GROUPS_SUCCESS,
      onError: CELL_GROUP_ERROR,
    },
  });
};

// create cell groups
export const createCellGroup = (cellgroupObj, history) => async (dispatch) => {
  const afterSuccess = () => {
    dispatch(showAlert({ content: "Cell group created!", type: "success" }));
    history.push("/me/groups/cellgroups");
  };

  const afterError = (err) => {
    dispatch(showAlert({ content: err, type: "danger" }));
  };
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/cellgroup",
      method: "post",
      data: cellgroupObj,
      onStart: CELL_GROUPS_REQUESTED,
      onSuccess: CREATE_CELL_GROUP_SUCCESS,
      onError: CELL_GROUP_ERROR,
      expectError: true,
      afterSuccess,
      afterError,
    },
  });
};

// add cell group member
export const addCellGroupMember = (cellgroupId, memberId, done) => async (
  dispatch
) => {
  const afterSuccess = (response) => {
    done(response.data);
    // dispatch(showAlert({ content: "Member added!", type: "success" }));
  };

  const afterError = (err) => {
    // dispatch(showAlert({ content: err, type: "danger" }));
  };
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: `/api/v1/cellgroup/${cellgroupId}/members/${memberId}`,
      method: "put",
      onStart: CELL_GROUPS_REQUESTED,
      onSuccess: ADD_CELL_GROUP_MEMBER,
      onError: CELL_GROUP_ERROR,
      expectError: true,
      afterSuccess,
      afterError,
    },
  });
};

// delete cell group member
export const deleteCellGroupMember = (cellgroupId, memberId, done) => async (
  dispatch
) => {
  const afterSuccess = (response) => {
    done(response.data);
    // dispatch(showAlert({ content: "Member removed!", type: "danger" }));
  };

  const afterError = (err) => {
    // dispatch(showAlert({ content: err, type: "danger" }));
  };
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: `/api/v1/cellgroup/${cellgroupId}/members/${memberId}`,
      method: "delete",
      onStart: CELL_GROUPS_REQUESTED,
      onSuccess: DELETE_CELL_GROUP_MEMBER,
      onError: CELL_GROUP_ERROR,
      expectError: true,
      afterSuccess,
      afterError,
    },
  });
};

// Clear current user's cellgroups
export const clearUserCellgroups = () => (dispatch) => {
  dispatch({
    type: CLEAR_USER_CELLGROUP,
  });
};
