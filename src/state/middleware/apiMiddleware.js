import axios from "axios";
import { API_CALL_BEGAN } from "../types";

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
    if (onStart) dispatch({ type: onStart });

    const response = await axios.request({
      url,
      method,
      data,
      params,
    });

    if (onSuccess)
      dispatch({
        type: onSuccess,
        payload: response.data,
      });

    if (afterSuccess)
      afterSuccess.type ? dispatch(afterSuccess) : afterSuccess(response.data);
  } catch (error) {
    if (onError)
      dispatch({
        type: onError,
        payload: expectError ? error.response.data.error : null,
      });
    if (afterError) afterError(error.response.data.error);
  }
};

export default api;
