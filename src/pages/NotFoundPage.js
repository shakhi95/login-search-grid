import React from "react";
import img404 from "../assets/404.png";

const NotFoundPage = () => {
  //
  return (
    <div className="container">
      <div className="row min-vh-100 align-items-center">
        <div className="col-sm-9 col-md-6 col-lg-4 mx-auto text-center">
          <img
            src={img404}
            alt="error"
            style={{ width: "100%", objectFit: "contain" }}
          />
          <h4>صفحه مورد نظر یافت نشد.</h4>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
