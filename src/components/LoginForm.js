import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions";

const LoginForm = ({ login }) => {
  //
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (fullname.length === 0 || password.length === 0) {
      setError("لطفا فرم را تکمیل کنید.");
    } else if (password !== "1234") {
      setError("پسورد وارد شده نادرست است.1234");
    } else {
      login(fullname);
      history.push("/");
    }
  };

  return (
    <div className="px-3">
      <h3 className="text-center text-primary mb-5">ورود کاربر</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">نام و نام خانوادگی:</label>
          <input
            type="text"
            className="form-control rounded-pill text-center"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
              setError("");
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">رمز عبور:</label>
          <input
            type="password"
            className="form-control rounded-pill text-center"
            style={{ letterSpacing: "0.5rem" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
        </div>
        <small className="text-danger d-block text-center">
          {error && error}
        </small>
        <button className="btn btn-success rounded-pill w-100 mt-3">
          ورود
        </button>
      </form>
    </div>
  );
};

export default connect(null, { login })(LoginForm);
