
import { use } from "react";
import { create } from "zustand";
import useAuth from "./authSlice";
import axios from 'axios'

const cartApi = 'http://localhost:5000/cart'
const useCart = create( (set,get)=>({

     cartData : [],
     isPending: true,
     validateUserData : ()=>{
      const user = useAuth.getState().currentUser
      return user
     },
     addToCart : (id , image , title , stock,price,totalPrice)=>{
      const { cartData } = get()
      const product = {id , image , title , stock,price, totalPrice}
    //    const user = get().validateUserData()
    //      if(user){
    //      return 
    // }
    //   
      const findedProduct = cartData.find(el=>el.id === product.id)
      
      if(!findedProduct){
        const productInfo = {...product, quantity:1}
        set({cartData : [...cartData,productInfo]})
        return 'add'
      }
      if(findedProduct.quantity < stock){
         //increment 
        const incrementedProducts = cartData.map(el=>(
            el.id===id ? {...el, quantity: ++el.quantity} : el
        ))
        console.log('increment',incrementedProducts)
        set({cartData : incrementedProducts})
        return 'update'
      }
     },
     addedToCartornot : async (id , image , title , stock,price,totalPrice)=>{
        const { cartData } = get()
        const product = {id , image , title , stock,price, totalPrice}
        const user = get().validateUserData()
      //     
      console.log('hello')
      if(!user){
         return 'noAuth'
      }
        try{
          //get(find)
        const isExistsUserWithProduct = await axios.get(`${cartApi}?userId=${user.id}&&productId=${product.id}`)
           console.log(isExistsUserWithProduct.data)
           if(!isExistsUserWithProduct.data.length){
            //post
               await axios.post(cartApi,{
                userId : user.id,
               productId: product.id,
               payload: {...product, quantity:1}
               })
               return 'add'
           }
           else{
               //addMore
            const existsUser = isExistsUserWithProduct.data[0]
            console.log(existsUser)
            const newQuantity = ++existsUser.payload.quantity
           /*we use patch to update the database it takes two parameters 
           (url,data to update)
           */
            await axios.patch(`${cartApi}/${existsUser.id}`,{
              payload: {
               ...existsUser.payload,
               quantity: newQuantity
              }
            })
           
             return 'update' 
           }
        }
        catch(error){
           
        }
     },
     getCartData : async()=>{
      const user = get().validateUserData()
      if(!user){
         set({isPending:false})
        return 'noAuth'
      }

      const { data } = await axios.get(`${cartApi}?userId=${user.id}`)
      const payload = data.map(el=>el.payload)
      set({cartData: payload})
      console.log(payload.title)
      set({isPending:false})
     },
     deleteFromCart : async(id)=>{
      const user = get().validateUserData()
       const { cartData } = get()
       if(user){
          const userWithProduct = await axios.get(`${cartApi}?userId=${user.id}&&productId=${id}`)
         const proId = userWithProduct.data[0].id
         console.log(proId)
           await axios.delete(`${cartApi}/${proId}`)
       }
     const filteredCart = cartData.filter((el)=>{
        return el.id !== id
     })
      console.log(cartData)
      set({cartData:filteredCart})
      console.log(cartData)
      return 'delete'
     },
     incrementAndDecrement : async(action,id,product)=>{


      const { cartData } = get()
        const user = get().validateUserData()
        let newQuantity=0
        console.log(product)
        if(action==='add'){
          newQuantity = ++product.quantity 
        }
        else{
         newQuantity = --product.quantity
        }
          if(newQuantity===0){
            console.log('<0')
           const { deleteFromCart } = get()
            deleteFromCart(id)
            //in this case the code will stop here and won't continue the other lines in incrementAnd.. fun 
            return
          }
        if(user){
           const userWithProduct = await axios.get(`${cartApi}?userId=${user.id}&&productId=${id}`)
          await axios.patch(`${cartApi}/${userWithProduct.data[0].id}`,
             { 
              payload: {
                ...userWithProduct.data[0].payload,
                quantity: newQuantity
              }
            }
            )
        }
        const incrementedProducts = cartData.map(el=>(
            el.id===id ? {...el, quantity: newQuantity} : el
        ))


        set({cartData : incrementedProducts})
          
     },
     clearCart : ()=>{
        set({cartData:[]})
     }
     

}))
export default useCart
