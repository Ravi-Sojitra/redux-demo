import React from "react";
import "./ErrorModal.css";
const ErrorModal = (onClickCloseModal) => {
  //   console.log(props.onClose);
  return (
    <div className="backdrop">
      <header className="header">
        <h2>Please Fill Employee Details</h2>
      </header>
      <div>
        <p className="content">Hello From ErrorModal</p>
      </div>
      <footer className="actions">
        <button onClick={onClickCloseModal} className="btn btn-primary">
          Okay
        </button>
      </footer>
    </div>
  );
};
export default ErrorModal;
