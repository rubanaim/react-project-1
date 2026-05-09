import './Products.css'
import ProductCard  from '../ProductCard/ProductCard'
import useDisplay from '../../zustant/displaySlice'
import useAuth from '../../zustant/authSlice'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyLoader from '../../assets/skelltons/ProductSkellton'

//cat here is param camr from App but it is always null because we don't send anything from <Products cat={}/> in APP
export default function Products({cat}) {

  const getData = useDisplay(state => state.getData)
  const isPending = useDisplay(state => state.isPending)
  const productsData= useDisplay(s => s.productsData)
  const isPendingCurrentUser = useAuth(s=>s.isPendingCurrentUser)
  const[err,setErr]=useState(null);
  // category comes from the App from the path => path :"products/:category",
  const {category} = useParams()

  useEffect(()=>{
    const handleDisplay = async()=>{
// in case cat is null means it's not mainStore category which comes from path will work because no arguments passed to <Prpducts comp in App/>
      const res = await getData(cat || category)
      if(!res.state){
        setErr(res.message)
      }
      else{
        setErr(null)
      }
    }
   handleDisplay()
   //updating 
  },[category])
  console.log(productsData, category);
  
  return (
    <div className='Products mt-10 lg:mx-20 md:mx-20 sm:mx-15 mx-20 '>
        <h1 className='text-center mb-7 font-extrabold text-4xl text-(--main-color) uppercase'>{category||cat}</h1>
        {/* pending handling */}
        {
          //for likeorDislike fun so the user can't click like before we know if we have user loged in or not 
          
          isPending ||  isPendingCurrentUser?
          <MyLoader count={8} />
          :
           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
          {
            productsData.map((el)=> <ProductCard
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
       
        {
          err ? <div className='lg:w-100 md:w-85 sm:w-75 bg-red-300 rounded text-red-800 lg:text-2xl md:text-xl sm:text-lg font-bold p-3 text-center m-auto'>{err}</div> : ''
        }
    </div>
  )
}
