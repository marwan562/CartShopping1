
import Cartitem from "./StoreItem/Cartitem"
import { useShoppingCart } from "../../Data/Context/ShoppingCartContext"
import formatCurrency from "../../Data/FormatCurrency"
import StoreItems from "../../Data/items.json"

function ShoppingCart({isOpen , closeCart}) {
  
    const {cartItems} = useShoppingCart()
  return (
    <div>
    
    {!isOpen   && 
    <div className=" fixed top-0 right-0  h-screen p-4   t-translate-x-full bg-gray-400 opacity-90 w-96  ">
        <div className=" relative">
        <button onClick={closeCart}  className=" bg-red-700  rounded-full  right-0  w-16 text-center absolute">close</button>
          <h1 className=" font-bold text-3xl">Cart</h1>
          
          {cartItems.map((item) => (
            <Cartitem key={item.id} {...item}/>
          ))}
          <div className=" font-bold underline"><span className=" text-blue-700  m-5  font-semibold text-xl">Total:</span>
          {formatCurrency(
            cartItems.reduce((total , cartItem)=> {
              const item = StoreItems.find((i)=> i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity;
            },0)
          )}
          </div>
        </div>
    </div>

}
    </div>
  )
}

export default ShoppingCart

