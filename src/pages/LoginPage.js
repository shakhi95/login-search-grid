import React from "react";
import loginImg from "../assets/loginImg.jpg";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  //
  return (
    <div className="container-fluid bg-my-gradient">
      <div className="row align-items-center min-vh-100">
        <div className="col-sm-10 col-md-8 mx-auto">
          <div className="card px-3 py-4">
            <div className="row align-items-center">
              <div className="col-md-7">
                <LoginForm />
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img
                  src={loginImg}
                  alt="loginImg"
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
