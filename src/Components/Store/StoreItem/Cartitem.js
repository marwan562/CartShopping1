import items from '../../../Data/items.json'
import formatCurrency from '../../../Data/FormatCurrency'
import { useShoppingCart } from '../../../Data/Context/ShoppingCartContext';


function Cartitem({id , quantity}) {
    const {removeItemFromCart} = useShoppingCart()
    const item = items.find((i) => i.id ===  id)
    if(item == null){
        return null;
    }
  return (
    <div className=' flex justify-around'>
    <div className=' flex gap-3 m-2'>
        <img src={item.imgUrl}
        alt={item.name}
        style={{width:'150px' , height:'100px' , objectFit: 'cover'}}
        />
      <div>
      <h2>{item.name}  <span className='text-slate-800'>{ quantity > 1 && <span>x{quantity}</span>}</span></h2>
      <h5 className=' font-semibold'>{formatCurrency(item.price)}</h5>
    {quantity > 1 &&   <h1 className=' text-gray-700 '>Total : {formatCurrency(item.price * quantity)}</h1> }
      </div>

    

    </div>
    <div>
        
    <button
    onClick={() => removeItemFromCart(id)}
     className=' text-xs mt-3 bg-red-500 rounded-3xl p-1'>Delete</button>
    </div>
    </div>
  )
}

export default Cartitem
