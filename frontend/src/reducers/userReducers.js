import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../constants/userLoginConstants";

export const authUserReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case LOGIN_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const registerUserReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case SIGN_UP_REQUEST:
      return {
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case SIGN_UP_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
