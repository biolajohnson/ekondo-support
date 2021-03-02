import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
} from "../constants/userLoginConstants";

export const authUserReducer = (
  state = { userInfo: null },
  { payload, type }
) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        success: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOGOUT:
      return {
        ...state,
        userInfo: null,
        loading: false,
        success: true,
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
export const getUserDetailsReducer = (
  state = { profile: null },
  { payload, type }
) => {
  switch (type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    case GET_USER_FAILED:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_PROFILE:
      return {
        profile: {},
        loading: false,
        success: true,
      };
    default:
      return state;
  }
};
