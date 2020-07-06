import {
  API_CALL_BEGAN,
  MEMBERS_REQUESTED,
  MEMBERS_ERROR,
  GET_MEMBERS_SUCCESS,
  CREATE_MEMBER_SUCCESS,
  UPDATE_MEMBER_SUCCESS,
  DELETE_MEMBER_SUCCESS,
  CLEAR_USER_MEMBERS,
} from "../types";

import { showAlert } from "../actions/alertActions";

// Get current user's cell members
export const getCurrentUserCellMembers = (params = {}) => async (dispatch) => {
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/cellmember/me",
      params,
      onStart: MEMBERS_REQUESTED,
      onSuccess: GET_MEMBERS_SUCCESS,
      onError: MEMBERS_ERROR,
    },
  });
};

// Create cell member
export const createCellMember = (cellMember, history) => async (dispatch) => {
  const afterSuccess = () => {
    dispatch(showAlert({ content: "Disciple added!", type: "success" }));
    history.push("/me/groups/disciples");
  };

  const afterError = (err) => {
    dispatch(
      showAlert({
        content: `${cellMember.name} already exists!`,
        type: "danger",
      })
    );
  };

  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: "/api/v1/cellmember",
      method: "post",
      data: cellMember,
      onStart: MEMBERS_REQUESTED,
      onSuccess: CREATE_MEMBER_SUCCESS,
      onError: MEMBERS_ERROR,
      expectError: true,
      afterSuccess,
      afterError,
    },
  });
};

// Delete cell member
export const deleteCellMember = (cellMemberId, history) => async (dispatch) => {
  const afterSuccess = () => {
    dispatch(showAlert({ content: "Disciple deleted!", type: "danger" }));
    history.push("/me/groups");
  };
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: `/api/v1/cellmember/${cellMemberId}`,
      method: "delete",
      onStart: MEMBERS_REQUESTED,
      onSuccess: DELETE_MEMBER_SUCCESS,
      onError: MEMBERS_ERROR,
      afterSuccess,
    },
  });
};

// Update cell member
export const updateCellMember = (
  cellMemberObj,
  cellMemberId,
  history
) => async (dispatch) => {
  const afterSuccess = () => {
    dispatch(showAlert({ content: "Disciple updated!", type: "success" }));
    history.push("/me/groups");
  };
  const afterError = (err) => {
    dispatch(
      showAlert({
        content: "Cannot be renamed with an exisiting name.",
        type: "danger",
      })
    );
  };
  dispatch({
    type: API_CALL_BEGAN,
    payload: {
      url: `/api/v1/cellmember/${cellMemberId}`,
      method: "put",
      data: cellMemberObj,
      onStart: MEMBERS_REQUESTED,
      onSuccess: UPDATE_MEMBER_SUCCESS,
      onError: MEMBERS_ERROR,
      expectError: true,
      afterSuccess,
      afterError,
    },
  });
};

export const clearUserMembers = () => (dispatch) => {
  dispatch({
    type: CLEAR_USER_MEMBERS,
  });
};
