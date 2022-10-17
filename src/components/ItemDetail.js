import ItemCount from "./ItemCount";
import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom";

const ItemDetail = ({ products }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (param) => {
    setItemCount(param);
    test.addToCart(products)
  };

  return (
    <div className="p-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4 d-flex">
            <img
              src={products.thumbnail}
              alt=""
              className="img-fluid rounded-start flex-fill"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">{products.title}</h5>
              <p className="card-text d-flex justify-content-center">
                {products.body}
              </p>
              <p className="card-text d-flex justify-content-center card-text1">
                {products.sourness}
              </p>
              <p className="card-text d-flex justify-content-center card-text2">
                {products.flavor}
              </p>
              <div className="d-flex justify-content-center">
                {itemCount === 0 ? (
                  <ItemCount
                    initial={itemCount}
                    stock={products.stock}
                    onAdd={onAdd}
                  />
                ) : (
                  <Link to="/cart">
                    <button type="button" className="btn btn-danger ms-2">
                      Comprar
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
