import axios from "axios";
import { API_CALL_BEGAN, TOGGLE_LOADER } from "../types";

const API_URL = "https://gcc-app-server.herokuapp.com";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== API_CALL_BEGAN) return next(action);

  next(action);

  const {
    url,
    method,
    data,
    params,
    onStart,
    onSuccess,
    onError,
    afterSuccess,
    afterError,
    expectError,
  } = action.payload;

  try {
    dispatch({ type: TOGGLE_LOADER });

    if (onStart) dispatch({ type: onStart });

    const response = await axios.request({
      url: process.env.NODE_ENV === "development" ? url : API_URL + url,
      method,
      data,
      params,
      withCredentials: true,
    });

    dispatch({ type: TOGGLE_LOADER });

    if (onSuccess)
      dispatch({
        type: onSuccess,
        payload: response.data,
      });

    if (afterSuccess)
      afterSuccess.type ? dispatch(afterSuccess) : afterSuccess(response.data);
  } catch (error) {
    dispatch({ type: TOGGLE_LOADER });

    if (onError)
      dispatch({
        type: onError,
        payload: expectError ? error.response.data.error : null,
      });
    if (afterError) afterError(error.response.data.error);
  }
};

export default api;
