import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// Get logs
export const GetLogs = () => async (dispatch) => {
  try {
    SetLoading();
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Set Loading to true
export const SetLoading = () => {
  return {
    type: SET_LOADING,
  };
};
