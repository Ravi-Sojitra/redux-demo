import { combineReducers } from "redux";
import employeeDataReducer from "./reducer";
//import counterReducer from "./Counter/counter.reducer";
// import reducer from "./reducer";
const rootReducer = combineReducers({ employeeData: employeeDataReducer });
export default rootReducer;
