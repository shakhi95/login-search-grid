import React from "react";
import { connect } from "react-redux";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import { sliceBigArrays } from "../utils/helpers";

const ItemsList = ({ filteredItems, pageNumber }) => {
  //
  const itemsToShow = sliceBigArrays(filteredItems, 5)[pageNumber - 1];

  const renderList = () => {
    return itemsToShow.map((item) => {
      return (
        <div className="col-sm-6 col-md-4" key={item.imdbID}>
          <ItemCard {...item} />
        </div>
      );
    });
  };

  return (
    <div className="container pb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">تعداد : {filteredItems.length}</h6>
        <Pagination />
      </div>
      <hr className="my-1" />
      {filteredItems.length === 0 ? (
        <h5 className="text-center text-danger py-5">
          آیتمی برای نمایش وجود ندارد.
        </h5>
      ) : (
        <div className="row align-items-center">{renderList()}</div>
      )}
    </div>
  );
};

const mapStateToProps = ({ items }) => {
  //
  return { filteredItems: items.filteredItems, pageNumber: items.pageNumber };
};

export default connect(mapStateToProps)(ItemsList);
