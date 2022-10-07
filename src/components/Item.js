import React from "react";

const Item = ({products}) => {
  
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 pb-5 d-flex justify-content-evenly">
      <div className="card border border-dark cardWidth buttonCard">
        <img
          src={products.thumbnail}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            {products.title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Item;
