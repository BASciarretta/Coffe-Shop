import React from "react";
import ItemCount from "./ItemCount";

const Item = (item) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-2 d-flex justify-content-evenly">
      <div className="card border border-dark" style={{ width: '18rem' }}>
        <img
          src={item.thumnail}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            {item.title}
          </h5>
          <p className="card-text d-flex justify-content-center">
            {item.body}
          </p>
          <p className="card-text d-flex justify-content-center">
            {item.sourness}
          </p>
          <p className="card-text d-flex justify-content-center">
            {item.flavor}
          </p>
          <div className="d-flex justify-content-center">
            <ItemCount/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
