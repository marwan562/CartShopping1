import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../../../Data/Context/ShoppingCartContext";

function CartShopping() {
    const {openCart , CartQuantity} = useShoppingCart()
  return (
    <div>
    <FaShoppingCart onClick={openCart} className=" relative border rounded-full cursor-pointer p-1  border-black" size={30} />
    <div className="cart-shopping-count ">{CartQuantity}</div>
   </div>
  )
}

export default CartShopping
