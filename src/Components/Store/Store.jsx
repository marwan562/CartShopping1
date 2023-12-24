
import items from '../../Data/items.json'

import StoreItem from './StoreItem/StoreItem'
function Store() {
   
  return (
    <div className=' container m-auto    '>

        <h1 className='font-thin text-6xl'>Store</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 '>

    {
        items.map((item)=> {
         
           return(
            <div key={item.id}>
                <StoreItem {...item}  />
            </div>
           )
          
       } )

     }
    </div>
      

    </div>
  )
}

export default Store
