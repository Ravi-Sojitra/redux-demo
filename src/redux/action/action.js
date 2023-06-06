// import { EMP_NAME, EMP_EMAIL, EMP_POST, EMP_SALARY } from "../inputs";
// export const emp_name_Handler = (emp_name) => {
//   return (dispatch) => {
//     dispatch({ type: EMP_NAME, payload: emp_name });
//   };
// };

import {
  ADD_EMPLOYEE_DATA,
  DELETE_EMPLOYEE_DATA,
  UPDATE_EMPLOYEE_DATA,
} from "./action-type";

// export const emp_email_handler = (emp_email) => {
//   return (dispatch) => {
//     dispatch({ type: EMP_EMAIL, payload: emp_email });
//   };
// };

// export const emp_post_Handler = (emp_post) => {
//   return (dispatch) => {
//     dispatch({ type: EMP_POST, payload: emp_post });
//   };
// };

// export const emp_salary_Handler = (emp_salary) => {
//   return (dispatch) => {
//     dispatch({ type: EMP_SALARY, payload: emp_salary });
//   };
// };

export const addEmployeeData = (data) => {
  // console.log("addData", data);
  return {
    type: ADD_EMPLOYEE_DATA,
    payload: data,
  };
};

export const updateEmployeeData = (updateData) => {
  console.log("edit=====", updateData);
  return {
    type: UPDATE_EMPLOYEE_DATA,
    payload: updateData,
  };
};

export const deleteEmployeeData = (id) => {
  return { type: DELETE_EMPLOYEE_DATA, payload: id };
};
