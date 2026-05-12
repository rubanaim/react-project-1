import './WishList.css'

import ProductCard from '../../components/ProductCard/ProductCard'
import useAuth from '../../zustant/authSlice'
import { useEffect, useState } from 'react'
import MyLoader from '../../assets/skelltons/ProductSkellton'
import useWishlist from '../../zustant/wishlistSlice'
import { Navigate } from 'react-router-dom'
//cat here is param camr from App but it is always null because we don't send anything from <Products cat={}/> in APP
export default function WishList() {

  const wishlistData = useWishlist(s=>s.wishlistData)
  const getwishlistData = useWishlist(s=>s.getwishlistData)
  const isPending = useWishlist(s=>s.isPending)
  const isPendingCurrentUser =useAuth(s=>s.isPendingCurrentUser)
  const currentUser = useAuth(s=>s.currentUser)
  const[err,setErr]=useState(null);
  
if(!currentUser&&!isPendingCurrentUser){
  console.log(isPendingCurrentUser);
  
    return <Navigate to={'/login'}/>
}
  // useEffect(()=>{
  //   const handleDisplay = async()=>{
  //     const res = await getwishlistData()
  //     if(!res.state){
  //       setErr(res.message)
  //     }
  //     else{
  //       setErr(null)
  //     }
  //   }
  //  handleDisplay()
  //  //updating 
  // },[])

  
  return (
    <div className='Products mt-10 lg:mx-20 md:mx-20 sm:mx-15 mx-20 '>
        <h1 className='text-center mb-7 font-extrabold text-4xl text-(--main-color) uppercase'>WishList</h1>
        {/* pending handling */}
        {
          // for likeorDislike fun so the user can't click like before we know if we have user loged in or not 
          
          isPending ||  isPendingCurrentUser?
          <MyLoader count={8} />
          :
          !wishlistData.length
          ?
          <div className='text-blue-800 bg-blue-200 px-3 py-3 mt-10 text-xl text-center'>There is No Products in WishList</div>
          : <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
          {
            wishlistData.map((el)=> <ProductCard
              key={el.id}
              id={el.id}
              image={el.image}
              price={el.price}
              title={el.title}
              discount={el.discount}
              stock={el.stock}
              description={el.description}
            />)
          }
          </div>
        }
       
        {/* error handling */}
       
        {/* {
          err ? <div className='lg:w-100 md:w-85 sm:w-75 bg-red-300 rounded text-red-800 lg:text-2xl md:text-xl sm:text-lg font-bold p-3 text-center m-auto'>{err}</div> : ''
        } */}
    </div>
  )
}
