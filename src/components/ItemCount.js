import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

const AddCount = () => {
    if (count < stock) {
        const aux = count + 1
        setCount(aux)
    }
}

const RemoveCount = () => {
    if (count > initial) {
        const aux = count - 1
        setCount(aux)
        }
}
    
    return (
        <div className="d-flex justify-content-center">
          <button type="button" onClick={RemoveCount} className="btn btn-dark">-</button>
          <p className="m-2">{count}</p>
          <button type="button" onClick={AddCount} className="btn btn-dark">+</button>
          <button type="button" onClick={onAdd} className="btn btn-dark ms-2">Añadir al carrito</button>
          </div>
      );
    };

    export default ItemCount;
