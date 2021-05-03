import React, { useState } from "react";
import { connect } from "react-redux";
import { filterItems } from "../redux/actions";

const SearchBox = ({ filterItems }) => {
  //
  const [searchTerm, setSearchTerm] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("all");

  const onSubmit = (e) => {
    e.preventDefault();
    filterItems({ searchTerm, year, type });
  };

  const resetForm = () => {
    setSearchTerm("");
    setType("all");
    setYear("");
    filterItems({ searchTerm: "", year: "", type: "all" });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto">
          <div className="card bg-light py-4 px-3">
            <form onSubmit={onSubmit}>
              <div className="row align-items-center mb-3">
                <label className="col-md-3 form-label">عبارت جستجو:</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control rounded-pill text-center px-3"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <label className="col-md-3 form-label">سال ساخت:</label>
                <div className="col-md-9">
                  <input
                    type="number"
                    className="form-control rounded-pill text-center px-3"
                    max={new Date().getFullYear()}
                    min={1950}
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <label className="col-md-3 form-label">نوع اثر:</label>
                <div className="col-md-9">
                  <select
                    className="form-select rounded-pill"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="all">همه</option>
                    <option value="movie">فیلم</option>
                    <option value="series">سریال</option>
                    <option value="game">بازی</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success rounded-pill py-0 px-3 me-1"
                >
                  جستجو
                </button>
                <button
                  type="button"
                  className="btn btn-warning rounded-pill py-0 px-3 ms-1"
                  onClick={resetForm}
                >
                  ریست
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { filterItems })(SearchBox);
