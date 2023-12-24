
import { useShoppingCart } from "../../../Data/Context/ShoppingCartContext";
import formatCurrency from "../../../Data/FormatCurrency"





const StoreItem = ({id , name , price , imgUrl}) => {
  const {getItemsQuantity , increaseCartQuantity , decreaseCartQuantity , removeItemFromCart} = useShoppingCart()
   const quantity = getItemsQuantity(id);
  
   
  return (
    <div className=" ">
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img className="w-full"  src={imgUrl} alt={name}/>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl mb-2">{name}</div>
           <div>{formatCurrency(price)}</div>
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit exercitationem praesentium nihil.
          </p>
      </div>
    <div className="px-6 pt-4 pb-2 text-center">
      {quantity === 0 ?
      <button onClick={() =>increaseCartQuantity(id)} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add To Card</button>
      : 
        <div className="">
          <div  className="flex justify-between">
              <button  onClick={() => increaseCartQuantity(id)} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">+</button>
              <span>{quantity} in cart</span>
              <button onClick={() =>decreaseCartQuantity(id)} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">-</button>
            
            </div>
            <div>
            <button onClick={() => removeItemFromCart(id)} className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Remove</button>
        </div>
        </div>
        
      }
    </div>
    </div>
    </div>
  )
}

export default StoreItem
