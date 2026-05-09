import './Cart.css'
import img from '../../assets/images/product-2-BigTxgyV-BigTxgyV.jpg'
import  useCart  from '../../zustant/cartSlice'
import useAuth from '../../zustant/authSlice'
import MyLoader from '../../assets/skelltons/ProductSkellton'
import useProduct from '../../hooks/useProduct'
import { useState,useEffect } from 'react'

export default function Cart() {

  const cartData = useCart(s=>s.cartData)
  // const deleteFromCart = useCart(s=>s.deleteFromCart)
  const incrementAndDecrement = useCart(s=>s.incrementAndDecrement)
  const [total,setTotal] = useState(0);
  const isPending = useCart(s=>s.isPending)
  const isPendingCurrentUser = useAuth(s=>s.isPendingCurrentUser)
  console.log(cartData)
  const { deleteHandler } = useProduct()
  useEffect(()=>{
    const total = cartData.reduce((a,b)=>{
      return a + (b.totalPrice*b.quantity);
    },0)
    setTotal(total)
  },[cartData])
  return (
    <div className='Cart flex flex-col justify-center items-center mt-10 gap-5 xl:px-40 lg:px-30 md:px-20 px-0 '>
        <h1 className='text-(--main-color) text-4xl font-bold'>Cart</h1>
        {
          isPending || isPendingCurrentUser ?
           <MyLoader count={3}/> 
          :
          cartData.map((el)=>(
            <div 
            key={el.id}
             className='flex gap-10 md:flex-row flex-col bg-white justify-between items-center md:w-[100%] px-20 md:py-2 py-10 rounded shadow'>
              <img src={el.image} alt="" className='w-[90px]'/>
              <div className='flex flex-col justify-center items-start'>
                <p className='xl:text-xl lg:text-lg md:text-md text-sm'>Price : ${el.totalPrice}</p>
                <p className='xl:text-xl lg:text-lg md:text-md text-sm font-bold'>total Price : ${el.totalPrice*el.quantity}</p>
              </div>
              <div className='flex flex-row gap-3'>
                <p 
                onClick={()=>incrementAndDecrement('add',el.id,el)}
                className='w-6 bg-black text-white rounded-full text-center cursor-pointer'>+</p>
                <p>{el.quantity}</p>
                <p 
                onClick={()=>incrementAndDecrement('delete',el.id,el)}
                className=' w-6 bg-black text-white rounded-full text-center cursor-pointer'>-</p>
              </div>
              <button 
              onClick={()=>deleteHandler(el.id)}
              className='text-white bg-red-700 xl:px-5 xl:py-3 md:px-3 md:py-2 px-2 py-1 md:text-md text-sm rounded transform hover:scale-110 duration-200 hover:bg-red-500'>Remove From Cart</button>
           </div>
          ))
        }
           <div className='flex sm:flex-row flex-col justify-between items-center bg-white xl:w-[800px] md:w-[600px] sm:w-[300px] md:px-40 px-10 py-5 md:text-2xl  font-bold rounded-2xl border border-black border-2'>
             <p>Total Cart : </p>
             <p>${total.toFixed(2)}</p>
           </div>
    </div>
  )
}
