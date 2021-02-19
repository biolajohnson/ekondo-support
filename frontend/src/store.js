import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authUserReducer, registerUserReducer } from "./reducers/userReducers";
import { addComplaintReducer } from "./reducers/complaintReducer.js";

const reducer = combineReducers({
  addComplaint: addComplaintReducer,
  authUser: authUserReducer,
  registerUser: registerUserReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
