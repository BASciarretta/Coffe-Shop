import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({products}) => {
  
  const onAdd = (param) =>{
    console.log(`La cantidad comprada es ${param}`)
  }
  
  return (
<div className="p-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4 d-flex">
            <img src={products.thumbnail} alt="" className="img-fluid rounded-start flex-fill" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">{products.title}</h5>
              <p className="card-text">{products.body}</p>
              <p className="card-text d-flex justify-content-center card-text1">{products.sourness}</p>
              <p className="card-text d-flex justify-content-center card-text2">{products.flavor}</p>
              <div className="d-flex justify-content-center">
              <ItemCount initial={0} stock={10} onAdd={onAdd}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;


