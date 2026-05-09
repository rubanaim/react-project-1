
import {create} from 'zustand'
import axios from 'axios'

const apiProducts ='http://localhost:5000/products'
const useDisplay = create ((set)=>({
//   global state
//   key:value

  productsData : [],
  categories : [],
  isPending: false,
  getData : async(cat)=>{
    try{
        //success
       set({isPending:true})
        //to delay loading the products to handle pending status
         await new Promise(resolve => setTimeout(resolve,2000) )

        //  the condtion is to show all the products in shop page using the Products Component
        if(cat){
            const {data} = await axios.get(`${apiProducts}?category=${cat}`)
          set({productsData:data})   
        }
        else{
           const {data} = await axios.get(apiProducts)
          set({productsData:data})
        }
      return {success : true}
  }
  catch(error){
       //fail
       return {success :false , message: error.message}
  }finally{
    set({isPending:false})
  }
   
      
  },
 getCategories : async()=>{
    try{
        const {data} = await axios.get(apiProducts+'/categories')
        set({categories:data})
    }
    catch(error){
        console.log(error.message)
    }
 }

}))

export default useDisplay