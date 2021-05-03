import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/actions";

const Header = ({ fullname, logout }) => {
  //
  return (
    <header className="bg-dark py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h6 className="mb-0 text-white">نام کاربر: {fullname}</h6>
        <button
          className="btn btn-danger rounded-pill px-3 py-0"
          onClick={logout}
        >
          خروج
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = ({ user }) => {
  //
  return { fullname: user.fullname };
};

export default connect(mapStateToProps, { logout })(Header);
