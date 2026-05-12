
import { create } from 'zustand'
import useAuth from './authSlice'
import axios from 'axios'

//current user       
const wishlistApi = "http://localhost:5000/wishList"
const useWishlist = create((set,get)=>({
    
    wishlistData : [],
    isPending: true,
    validateUserData : ()=>{
        const user = useAuth.getState().currentUser
        return user
    },

    likeorDislike : async(id , image , price , title , discount , stock)=>{
         const product = {id , image , price , title , discount , stock}
         const { wishlistData } = get()
        const user = get().validateUserData()
        if(!user){
            return 'noAuth'
        }
        try{
        console.log(product);
        //get(find)
        const isExistsuserWithProduct = await axios.get(`${wishlistApi}?userId=${user.id}&productId=${product.id}`)
        console.log(isExistsuserWithProduct.data)
        if(!isExistsuserWithProduct.data.length){
         //post 
         await axios.post(wishlistApi,{
            userId : user.id,
            productId: product.id,
            payload: product
         })
         set({wishlistData: [...wishlistData,product]})
          console.log(wishlistData,product)
        //  console.log('add')
         return 'add'
        }
        else{
           //delete 
           const wishlistId = isExistsuserWithProduct.data[0].id
           await axios.delete(`${wishlistApi}/${wishlistId}`)
           const filteredlist = wishlistData.filter(el=>el.id !== product.id)
           set({wishlistData:filteredlist})
            console.log(wishlistData,product)
        //    console.log('delete')
             return 'remove'
        }
        }
        catch(error){
           console.log(error.message)
        }
     
    },
    getwishlistData : async()=>{
        const user=get().validateUserData()
        if(!user){
            return 'noAuth'
        }
       
        const {data} = await axios.get(`${wishlistApi}?userId=${user.id}`)
        const payload = data.map(el=>el.payload)
        set({wishlistData : payload})
        console.log(data)
        console.log(get().wishlistData)
        set({isPending:false})
    },
    clearwishlist : ()=>{
      set({wishlistData:[]})
    }
}))
export default useWishlist