import { useState } from "react";

const ItemCount = () => {
    const [coffe, setCoffe] = useState(0)

const AddCount = () => {
    if (coffe < 5) {
        const aux = coffe + 1
        setCoffe(aux)
    }
}

const RemoveCount = () => {
    if (coffe > 0) {
        const aux = coffe - 1
        setCoffe(aux)
        }
}
    
    return (
        <div className="d-flex justify-content-center">
          <button type="button" onClick={RemoveCount} className="btn btn-dark">-</button>
          <p className="m-2">{coffe}</p>
          <button type="button" onClick={AddCount} className="btn btn-dark">+</button>
          <button type="button" className="btn btn-dark ms-2">Añadir al carrito</button>
          </div>
      );
    };

    export default ItemCount;
