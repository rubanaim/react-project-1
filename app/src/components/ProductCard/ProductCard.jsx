import { FaCartShopping } from 'react-icons/fa6';
import './ProductCard.css'
import { FaHeart, FaStar } from 'react-icons/fa';
import useProduct from '../../hooks/useProduct';
export default function ProductCard(
  {id , image , price , title , discount , stock , description}
) 

{

  const totalPrice = +(price-(price*(discount/100))).toFixed(2)
  const { wishlistHandler, handleAddToCart, addToCartHandler} = useProduct()
  return (
    <div className='flex flex-col justify-center items-center bg-white text-black relative h-[470px] py-3 rounded shadow-xl'>
       <div className="con-img w-[100%] h-[60%] relative flex justify-center items-center mb-3 px-2">
          <img src={image} alt="" className='h-[80%] lg:hover:scale-115 hover:scale-110 duration-300'/>
       </div>
       <div className='w-[100%] h-[40%] flex flex-col justify-between items-center'>
           <div className="details flex flex-col gap-3 justify-center items-center">
              <b className='text-2xl '>{title.split(' ').slice(0,2).join(' ')}</b>
              <p className='flex flex-row gap-5'><span className='font-bold text-lg'>${totalPrice}</span><span className='font-bold text-lg text-gray-500'><del>${price}</del></span></p>
              <p className='text-amber-300 flex flex-row'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
           </div>
           <div className="icons flex flex-row justify-between px-2 w-[100%]">
              <button className='bg-(--main-color)  text-white p-3 hover:text-red-600 duration-300 active:scale-95' onClick={()=>wishlistHandler(id , image , price , title , discount , stock)} >
                <FaHeart/>
              </button>
              <button 
              onClick={()=>
                { 
                  handleAddToCart(id , image , title , stock,price,totalPrice);
                  addToCartHandler(id , image , title , stock,price,totalPrice);
                }
              }
              className='bg-(--main-color)  text-white p-3 hover:text-(--secondary-color) duration-300 cursor-pointer active:scale-95' >
                <FaCartShopping/>
              </button>
            </div>
       </div>
    </div> 
  )
}
