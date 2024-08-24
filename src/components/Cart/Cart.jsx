import { useContext } from "react";
import { products } from "../../Data/data";
import * as s from "./CartStyles";
import { Context } from "../../Context/Context";

function Cart() {
  const { cart } = useContext(Context);

  return (
    <>
      <s.CartContainer isOpen={cart}>
        <s.CartTitle>Carrito</s.CartTitle>
        <s.CartList>
          <s.CartItem>
            <s.CartItemText>{products[1].model}</s.CartItemText>
            <s.CartItemText>${products[1].price}</s.CartItemText>
            <s.CartItemImg src={products[1].img} alt={products[1].model} />
          </s.CartItem>
          <s.CartItem>
            <s.CartItemText>{products[2].model}</s.CartItemText>
            <s.CartItemText>${products[2].price}</s.CartItemText>
            <s.CartItemImg src={products[2].img} alt={products[2].model} />
          </s.CartItem>
        </s.CartList>
        <s.CartCounter>Total de productos: {2}</s.CartCounter>
      </s.CartContainer>
    </>
  );
}

export default Cart;
