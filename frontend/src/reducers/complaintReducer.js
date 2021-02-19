import {
  ADD_COMPLAINT_REQUEST,
  ADD_COMPLAINT_FAILED,
  ADD_COMPLAINT_SUCCESS,
  GET_COMPLAINT_FAILED,
  GET_COMPLAINT_REQUEST,
  GET_COMPLAINT_SUCCESS,
} from "../constants/complaintsConstants.js";

export const addComplaintReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case ADD_COMPLAINT_REQUEST:
      return {
        loading: true,
        complaint: [],
      };
    case ADD_COMPLAINT_SUCCESS:
      return {
        loading: false,
        complaint: payload.complaint,
      };
    case ADD_COMPLAINT_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const ComplaintDetailsReducer = (
  state = { complaint: { complaintData: {} } },
  { payload, type }
) => {
  switch (type) {
    case GET_COMPLAINT_REQUEST:
      return {
        loading: true,
      };
    case GET_COMPLAINT_SUCCESS:
      return {
        loading: false,
        complaint: payload,
      };
    case GET_COMPLAINT_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
