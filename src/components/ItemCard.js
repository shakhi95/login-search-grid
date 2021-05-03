import React from "react";
import { connect } from "react-redux";
import { setModal } from "../redux/actions";
import ItemEdit from "./ItemEdit";

const ItemCard = ({ Title, Type, Year, imdbID, setModal }) => {
  //

  const renderModalBody = () => {
    return <ItemEdit title={Title} type={Type} year={Year} imdbId={imdbID} />;
  };

  return (
    <div
      className="itemCard card bg-light text-center my-2 py-4 px-3"
      title="ویرایش"
      onClick={() => setModal(true, renderModalBody())}
    >
      <h5 className="mb-3">{Title}</h5>
      <h6 className="text-muted">{Year}</h6>
      <h6 className="text-muted">{Type.toUpperCase()}</h6>
    </div>
  );
};

export default connect(null, { setModal })(ItemCard);
