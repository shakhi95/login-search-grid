import React from "react";
import { connect } from "react-redux";
import { setPageNum } from "../redux/actions";

const Pagination = ({ filteredItems, pageNumber, setPageNum }) => {
  //
  let totalPages = Math.ceil(filteredItems.length / 5);
  if (totalPages === 0) {
    totalPages = 1;
  }

  const goNext = () => {
    setPageNum(pageNumber + 1);
  };
  const goBack = () => {
    setPageNum(pageNumber - 1);
  };
  const goLast = () => {
    setPageNum(totalPages);
  };
  const goFirst = () => {
    setPageNum(1);
  };

  return (
    <nav>
      <ul className="pagination pagination-sm mb-0">
        <li className={`page-item ${pageNumber === totalPages && "disabled"}`}>
          <button className="page-link" onClick={goLast}>
            آخرین
          </button>
        </li>
        <li className={`page-item ${pageNumber === totalPages && "disabled"}`}>
          <button className="page-link" onClick={goNext}>
            بعدی
          </button>
        </li>
        <li className="page-item active">
          <span className="page-link">{`${pageNumber}/${totalPages}`}</span>
        </li>
        <li className={`page-item ${pageNumber === 1 && "disabled"}`}>
          <button className="page-link" onClick={goBack}>
            قبلی
          </button>
        </li>
        <li className={`page-item ${pageNumber === 1 && "disabled"}`}>
          <button className="page-link" onClick={goFirst}>
            اولین
          </button>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ items }) => {
  //
  return { filteredItems: items.filteredItems, pageNumber: items.pageNumber };
};

export default connect(mapStateToProps, { setPageNum })(Pagination);
