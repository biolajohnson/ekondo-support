import {
  ADD_COMPLAINT_SUCCESS,
  ADD_COMPLAINT_FAILED,
  ADD_COMPLAINT_REQUEST,
  UPLOAD_FAILED,
  UPLOAD_SUCCESS,
} from "../constants/complaintsConstants.js";
import axios from "axios";

export const createComplaint = () => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMPLAINT_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post("/api/complaint", config);
    dispatch({
      type: ADD_COMPLAINT_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ADD_COMPLAINT_FAILED,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
