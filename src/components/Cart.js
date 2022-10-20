import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const context = useContext(CartContext);

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-end pb-4">
        <button
          onClick={context.deleteAll}
          type="button"
          className="btn btn-danger ms-2"
        >
          Eliminar todo
        </button>
      </div>
      {context.cartList.length > 0 &&
        context.cartList.map((products) => (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex">
                <img
                  src={products.thumbnail}
                  className="img-fluid rounded-start flex-fill"
                  alt="producto"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-center">{products.title}</h5>
                  <p className="card-text d-flex justify-content-center card-text2">
                    {products.qty} productos
                  </p>
                  <p className="card-text d-flex justify-content-center card-text3">
                    $ {products.price} c/u
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => context.deleteItem(products.id)}
                      type="button"
                      className="btn btn-danger ms-2"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {context.cartList.length > 0 ? (
        <div className="col-lg-6 pt-3">
          <ul className="list-group">
            <p className="fw-bold">Subtotal:</p>
            <li className="list-group-item">${context.calculateSubTotal()}</li>
            <p className="pt-4 fw-bold">+ IVA (21%):</p>
            <li className="list-group-item">${context.calculateTaxes()}</li>
            <p className="pt-4 fw-bold">Total:</p>
            <li className="list-group-item">${context.total()}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
