

import useWishlist from '../zustant/wishlistSlice'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import  useCart  from '../zustant/cartSlice'

export default function useProduct() {
   
  const navigate = useNavigate()
    const likeorDislike = useWishlist(s=>s.likeorDislike)
   
   const wishlistHandler = async(id , image , price , title , discount , stock)=>{
    const res= await likeorDislike(id , image , price , title , discount , stock)
    console.log(res)
    if(res==='add'){
       Swal.fire({
        title: `success add product <span class='text-green-800'>${title}<span>`,
        text: "Alert From WishList!",
        icon: "success",
        showConfirmButton: false,
        timer : 2000
     });
     console.log('added')
    }
    else if(res==='remove'){
       Swal.fire({
        title: `success remove your product`,
        text: "Alert From WishList!",
        icon: "success",
        showConfirmButton: false,
        timer : 2000
     });
    }
    
    else {
       Swal.fire({
        title: `Can't Add Product (You have to login first)`,
        text: "Alert From WishList!",
        icon: "error",
        showConfirmButton: true,
        confirmButtonText: 'Login now',
        showCancelButton: true
       
     }).then((result) => {
     /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        navigate('/login')
        }
        
      });
    }
    
   }
   const addToCart = useCart(s=>s.addToCart)
   
   const handleAddToCart = (id , image , title , stock,price,totalPrice)=>{
      const res = addToCart(id , image , title , stock,price,totalPrice)
     if(res==='add'){
       Swal.fire({
        title: `success add product <span class='text-green-800'>${title}<span>`,
        text: "Alert From Cart!",
        icon: "success",
        showConfirmButton: false,
        timer : 2000
     });
  
    }
    else if(res==='update'){
        Swal.fire({
        title: `success updated quantity of your product`,
        text: "Alert From Cart!",
        icon: "success",
        showConfirmButton: false,
        timer : 2000
     });
    }
     
   }
   const addedToCartornot = useCart(s=>s.addedToCartornot)
   const addToCartHandler = async(id , image , title , stock,price,totalPrice)=>{
    const res = await addedToCartornot(id , image , title , stock,price,totalPrice);
        console.log(res)
    if(res==='add'){
       Swal.fire({
        title: `success add product <span class='text-green-800'>${title}<span>`,
        text: "Alert From Cart!",
        icon: "success",
        showConfirmButton: false,
        timer : 2000
     });
  
    }
    else if(res==='update'){
        Swal.fire({
        title: `success updated quantity of your product`,
        text: "Alert From Cart!",
        icon: "success",
        showConfirmButton: false,
        timer : 2000
     });
    }
   }
   const deleteFromCart = useCart(s=>s.deleteFromCart)
   const deleteHandler = async(id)=>{
      const res = await deleteFromCart(id);
      if(res==='delete'){
          Swal.fire({
        title: `success remove your product`,
        text: "Alert From Cart!",
        icon: "success",
        showConfirmButton: false,
        timer : 2000
     });
      }
   }
   

   
  return { wishlistHandler,handleAddToCart, addToCartHandler, deleteHandler}
}
