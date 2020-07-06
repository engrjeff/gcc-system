import { TOGGLE_LOADER } from "../types";

const initialState = {
  loading: false,
};

const uiReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default uiReducer;
