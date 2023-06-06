// import React from "react";
// import { Modal, Button } from "react-bootstrap";
import "./UpdateData.css";
import React, { useEffect, useState } from "react";
import Crud from "./Crud";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeData } from "./action/action";
// import "../App.css";
const UpdateData = ({ id, editOpenModal }) => {
  const [editName, setEditName] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    post: "",
    salary: "",
    id: "",
  });
  // const NamChange = (e) => {
  //   setForm("");
  // };
  // console.log("id", id);

  const state = useSelector((state) => state.employeeData);
  const dispatch = useDispatch();
  useEffect(() => {
    let tempArray = [...state];
    tempArray.filter((item, index) => {
      if (item.id === id) {
        setForm(item);
      }
    });
  }, []);

  const nameUpdateChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };
  const emailUpdateChange = (e) => {
    setForm({ ...form, email: e.target.value });
  };
  const postUpdateChange = (e) => {
    setForm({ ...form, post: e.target.value });
  };
  const salaryUpdateChange = (e) => {
    setForm({ ...form, salary: e.target.value });
  };
  // console.log("<><><><><>", id);

  const onClickSubmitbtn = () => {
    let editObj = {
      name: form.name,
      email: form.email,
      post: form.post,
      salary: form.salary,
      id: form.id,
    };

    dispatch(updateEmployeeData(editObj));

    editOpenModal();

    // console.log("editObj", editObj);
  };

  return (
    // <div>
    //   <h2>dasdasd</h2>
    // </div>
    <div className="modal show akash fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={form.name}
                onChange={nameUpdateChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                value={form.email}
                onChange={emailUpdateChange}
              />
            </div>
            <div>
              <label>Post</label>
              <input
                type="text"
                value={form.post}
                onChange={postUpdateChange}
              />
            </div>
            <div>
              <label>Salary</label>
              <input
                type="text"
                value={form.salary}
                onChange={salaryUpdateChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onClickSubmitbtn}
            >
              save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={editOpenModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateData;
