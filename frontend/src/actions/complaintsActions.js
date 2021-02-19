import {
  ADD_COMPLAINT_SUCCESS,
  ADD_COMPLAINT_FAILED,
  ADD_COMPLAINT_REQUEST,
  DELETE_COMPLAINT_FAILED,
  DELETE_COMPLAINT_REQUEST,
  DELETE_COMPLAINT_SUCCESS,
  GET_COMPLAINT_FAILED,
  GET_COMPLAINT_REQUEST,
  GET_COMPLAINT_SUCCESS,
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

export const getComplaint = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COMPLAINT_REQUEST,
    });

    const { data } = await axios.get(`/api/complaint/${id}`);
    dispatch({
      type: GET_COMPLAINT_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_COMPLAINT_FAILED,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const deleteComplaint = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_COMPLAINT_REQUEST,
    });
    await axios.delete(`/api/complaint/${id}`);
    dispatch({
      type: DELETE_COMPLAINT_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COMPLAINT_FAILED,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
