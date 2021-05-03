import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

const Modal = ({ isShown, body }) => {
  //
  return ReactDOM.createPortal(
    <div
      className={`modal ${isShown ? "d-block" : ""}`}
      style={{ backgroundColor: "rgba(7, 0, 10, 0.63)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">{body}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = ({ ui }) => {
  //
  return { isShown: ui.modal.isShown, body: ui.modal.body };
};

export default connect(mapStateToProps)(Modal);
