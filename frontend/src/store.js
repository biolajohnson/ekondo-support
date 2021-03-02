import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  authUserReducer,
  registerUserReducer,
  getUserDetailsReducer,
} from "./reducers/userReducers";
import { addComplaintReducer } from "./reducers/complaintReducer.js";

const reducer = combineReducers({
  addComplaint: addComplaintReducer,
  authUser: authUserReducer,
  registerUser: registerUserReducer,
  getUserDetails: getUserDetailsReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { authUser: { userInfo: userInfoFromStorage } };

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
