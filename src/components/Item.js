import React from "react";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 pb-5 d-flex justify-content-evenly">
      <Link to={`${products.id}`} className="text-decoration-none text-dark">
        <div className="card border border-dark cardWidth cursor">
          <img
            alt="thmbnail"
            src={products.thumbnail}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">
              {products.title}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
