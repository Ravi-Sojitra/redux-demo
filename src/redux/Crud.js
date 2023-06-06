import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployeeData,
  deleteEmployeeData,
  updateEmployeeData,
} from "./action/action";
import ErrorModal from "./ErrorModal";
import UpdateData from "./UpdateData";
import "./Crud.css";
import { Button } from "bootstrap";

function Crud({ props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [salary, setSalary] = useState("");
  const [valid, setValid] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [id, setId] = useState(null);
  const { delete_id } = useState(null);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if ((name === "" && email === "") || (post === "" && salary === "")) {
      <p>name Error</p>;

      //alert("input error");
    } else {
      let obj = {
        name: name,
        email: email,
        post: post,
        salary: salary,
        id: new Date().getTime(),
      };
      dispatch(addEmployeeData(obj));
    }
    setName("");
    setEmail("");
    setPost("");
    setSalary("");
  };

  const onClickDeleteData = (id) => {
    dispatch(deleteEmployeeData(id));
  };

  const editDataHandler = (e) => {
    e.preventDefault();
    if (1) {
    }
    setValid(true);
  };

  const data = useSelector((state) => state.employeeData);
  console.log("getdata", data);

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onClickEditBtn = (id) => {
    // console.log("IDDDDDDDD", id);
    setId(id);
    setEditModal(true);
  };
  const onClickDeletebtn = (id) => {
    setDeleteData(true);
  };
  return (
    <>
      {}
      <div>
        <form className="bg-card">
          <div className="input-control">
            <label htmlFor="emp_name">Employee Name</label>
            <input
              className="form-control"
              onChange={onChangeNameHandler}
              type="text"
              value={name}
              placeholder="Enter Your Name"
              required
            ></input>
            {name === "" ? (
              <div>
                {" "}
                <br /> <p>Please enter name</p>{" "}
              </div>
            ) : (
              ""
            )}
            <label htmlFor="emp_email">Employee Email</label>
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
            ></input>{" "}
            {email === "" ? (
              <div>
                {" "}
                <br /> <p>Please enter name</p>{" "}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="input-control">
            <label htmlFor="emp_post">Employee Post</label>
            <select value={post} onChange={(e) => setPost(e.target.value)}>
              <option value="">select post</option>
              <option value="app">App developer</option>
              <option value="unity">Unity developer</option>
              <option value="webdesigner">Web Designer</option>
            </select>{" "}
            {post === "" ? (
              <div>
                {" "}
                <br /> <p>Please enter name</p>{" "}
              </div>
            ) : (
              ""
            )}
            <label htmlFor="emp_name">Employee Salary</label>
            <input
              className="form-control"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              type="text"
              placeholder="Enter Your Salary"
            ></input>{" "}
            {salary === "" ? (
              <div>
                {" "}
                <br /> <p>Please enter name</p>{" "}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="button-control">
            <input
              type="button"
              value="Submit"
              onClick={onSubmitHandler}
              className="btn btn-primary"
            ></input>
            Edit
          </div>
        </form>

        {data.map((item, index) => {
          return (
            <div className="bg-card">
              <ul>
                <li>Name :{item.name}</li>
                <li>Email :{item.email}</li>
                <li>Post :{item.post}</li>
                <li>Salary :{item.salary}</li>
                <button
                  className="edit-btn"
                  onClick={() => onClickEditBtn(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onClickDeleteData(item.id)}
                >
                  Delete
                </button>
              </ul>
            </div>
          );
        })}
      </div>
      {editModal && (
        <UpdateData editOpenModal={() => setEditModal(false)} id={id} />
      )}
    </>
  );
}

export default Crud;
