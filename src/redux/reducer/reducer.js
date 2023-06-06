import {
  ADD_EMPLOYEE_DATA,
  DELETE_EMPLOYEE_DATA,
  UPDATE_EMPLOYEE_DATA,
} from "../action/action-type";

const intitalState = [];

const employeeDataReducer = (state = intitalState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_DATA:
      return [...state, action.payload];
    case UPDATE_EMPLOYEE_DATA:
      let tempArray = [...state];

      return tempArray.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
      });

    case DELETE_EMPLOYEE_DATA:
      let deleteData = [...state];
      return deleteData.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default employeeDataReducer;
