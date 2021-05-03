import React, { useState } from "react";
import { connect } from "react-redux";
import { setModal, editItem } from "../redux/actions";

const ItemEdit = ({ title, type, year, imdbId, setModal, editItem }) => {
  //
  const [itemTitle, setItemTitle] = useState(title);
  const [itemYear, setItemYear] = useState(year);
  const [itemType, setItemType] = useState(type);

  const onSubmit = (e) => {
    e.preventDefault();
    editItem({ itemTitle, itemType, itemYear, imdbId });
    setModal();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">عنوان:</label>
        <input
          type="text"
          className="form-control rounded-pill text-center px-3"
          value={itemTitle}
          onChange={(e) => {
            setItemTitle(e.target.value);
          }}
          style={{ fontFamily: "sans-serif", direction: "ltr" }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">سال ساخت:</label>
        <input
          type="text"
          className="form-control rounded-pill text-center px-3"
          value={itemYear}
          onChange={(e) => {
            setItemYear(e.target.value);
          }}
          style={{ fontFamily: "sans-serif", direction: "ltr" }}
        />
      </div>
      <div className="mb-5">
        <label className="form-label">نوع اثر:</label>
        <select
          className="form-select rounded-pill"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
        >
          <option value="movie">فیلم</option>
          <option value="series">سریال</option>
          <option value="game">بازی</option>
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-success rounded-pill py-0 px-3 me-1"
        >
          ثبت تغییرات
        </button>
        <button
          type="button"
          className="btn btn-secondary rounded-pill py-0 px-3 ms-1"
          onClick={() => setModal()}
        >
          انصراف
        </button>
      </div>
    </form>
  );
};

export default connect(null, { setModal, editItem })(ItemEdit);
