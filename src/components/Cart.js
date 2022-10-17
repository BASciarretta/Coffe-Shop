import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const test = useContext(CartContext)
  console.log(test.cartList)
  return (
    <>
      <p>Soy un carrito</p>
    </>
  );
};

export default Cart;
