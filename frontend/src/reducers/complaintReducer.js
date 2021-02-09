import {
  ADD_COMPLAINT_REQUEST,
  ADD_COMPLAINT_FAILED,
  ADD_COMPLAINT_SUCCESS,
} from "../constants/complaintsConstants.js";

export const addComplaintReducer = ({ payload, type }, state = {}) => {
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
