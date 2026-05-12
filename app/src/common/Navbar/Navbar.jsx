import './Navbar.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useRef, useEffect , useState } from 'react'
import useDisplay from '../../zustant/displaySlice';
import useAuth from '../../zustant/authSlice';
import Loader from '../../common/Loader'
import UserDropDown from '../../components/dropDowns/UserDropDown';
import { FaBars } from "react-icons/fa6";
import useWishlist from '../../zustant/wishlistSlice';
import  useCart  from '../../zustant/cartSlice';


export default function Navbar() {

  const getwishlistData= useWishlist(s=>s.getwishlistData)
  const getCartData= useCart(s=>s.getCartData)
  const cartData= useCart(s=>s.cartData)
  const navigate = useNavigate()
  const[isMenueOpen,setIsMenueOpen]=useState(false)
  const dropdownRef =useRef()
  const dropdownRef2 =useRef()
  const handleDropdown =()=>{
     if (!dropdownRef.current) return
    dropdownRef.current.classList.toggle('scale-y-0')
    console.log(true)
  }
  const handleDropdown2 =()=>{
     if (!dropdownRef2.current) return
    dropdownRef2.current.classList.toggle('scale-y-0')
  }
  const getCategories = useDisplay(s=>s.getCategories)
  const categories = useDisplay(s=>s.categories)
  
  const currentUser = useAuth(s=>s.currentUser)
  const isPendingCurrentUser = useAuth(s=>s.isPendingCurrentUser)
  console.log(currentUser, isPendingCurrentUser)
  const wishlistData = useWishlist(s=>s.wishlistData)
  useEffect(()=>{
    getCategories()
  },[])

  useEffect(()=>{
    getwishlistData()
    getCartData()
  },[currentUser])

  return (
    <div className='Navbar sticky top-0 z-100 bg-(--secondary-color) flex items-center justify-between gap-4 flex-wrap text-white px-10 py-3 drop-shadow-md'>
        <div>
          <a href="/" className='font-bold text-2xl'>Bravo <span className='text-(--main-color)'>Shop</span></a>
        </div>
        <ul className='hidden xl:flex items-center gap-3 cursor-pointer'>
          <li>
            <NavLink to="/" className={'hover:text-(--main-color) py-3 font-medium text-xl'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={'hover:text-(--main-color) py-3 font-medium text-xl'}>About</NavLink>
          </li>
          <li>
            <NavLink to="products" className={'hover:text-(--main-color) py-3 font-medium text-xl'}>Shop</NavLink>
          </li>
          <li className='relative ' onClick={handleDropdown}>
            <span className='py-3 font-medium text-xl flex justify-center hover:text-(--main-color)'>Products <TiArrowSortedDown /></span>
            <div ref={dropdownRef} className='z-10 origin-top scale-y-0 duration-300 flex flex-col top-full inset-s-0 bg-(--main-color) absolute px-2 py-3 w-[150px] rounded'> 
              {
                categories.slice(1).map((cat,index)=>(
                    <Link 
                    to={`products/${cat}`}
                    key={index}
                     onClick={handleDropdown} 
                     className={'font-medium text-lg text-black duration-300 hover:bg-white px-2'}>{cat}</Link>
                ))
              }
             
            </div>
          </li>
          <li>
            <NavLink to="/contact" className={'hover:text-(--main-color) py-3 font-medium text-xl'}>Contact</NavLink>
          </li>
        </ul>
        <div className='relative hidden md:flex justify-center items-center gap-30 py-5'>
          {
            isPendingCurrentUser ? <Loader/> :
            !isPendingCurrentUser && !currentUser ?
               <div className='flex items-center justify-center gap-3'>
                 <NavLink to="/register" className='text-white hover:text-(--main-color)'>Register</NavLink>
                 <span className=''>|</span>
                 <NavLink to="/login" className='text-white hover:text-(--main-color)'>Login</NavLink>
                </div>
             :
             <UserDropDown user={currentUser}/>
          }
         
          <div className='flex items-center gap-3'>
           <div  className='flex items-center gap-1'>
             <FaHeart size={20} color='var(--main-color)' onClick={()=>navigate('/wishlist')}/>
             <sub>({wishlistData.length})</sub>
           </div>
           <div className='flex items-center gap-1'>
             <FaCartShopping size={20} color='var(--main-color) ' onClick={()=>navigate('/cart')}/>
             <sub>({cartData.length})</sub>
           </div>
          </div>
        </div>
        <FaBars size={22} className='xl:hidden block cursor-pointer' onClick={()=>{setIsMenueOpen(!isMenueOpen)}}/>
          <div className={`absolute xl:hidden top-[100%] left-0 w-full bg-(--secondary-color) flex flex-col items-center gap-6 transform transition-transform ${
            isMenueOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
          >
          <li className='list-none w-full  text-center cursor-pointer py-3'>
            <NavLink to="/" className={'hover:text-(--main-color)  font-medium text-xl'}>Home</NavLink>
          </li>
          <li className='list-none w-full  text-center  cursor-pointer'>
            <NavLink to="/about" className={'hover:text-(--main-color) font-medium text-xl'}>About</NavLink>
          </li>
          <li className='list-none w-full  text-center  cursor-pointer'>
            <NavLink to="products" className={'hover:text-(--main-color) font-medium text-xl'}>Shop</NavLink>
          </li>
          <li className='relative list-none w-full  text-center  cursor-pointer' onClick={handleDropdown2}>
            <span className='py-3 font-medium text-xl flex justify-center hover:text-(--main-color)'>Products <TiArrowSortedDown /></span>
            <div ref={dropdownRef2} className='z-10 origin-top scale-y-0 duration-300 flex flex-col top-full sm:left-[43%] left-[25%] inset-s-0 bg-(--main-color) absolute px-2 py-3 w-[150px] rounded'> 
              {
                categories.slice(1).map((cat,index)=>(
                    <Link 
                    to={`products/${cat}`}
                    key={index}
                     onClick={handleDropdown2} 
                     className={'font-medium text-lg text-black duration-300 hover:bg-white px-2'}>{cat}</Link>
                ))
              }
             
            </div>
          </li>
          <li className='list-none w-full  text-center  cursor-pointer py-3'>
            <NavLink to="/contact" className={'hover:text-(--main-color)  font-medium text-xl'}>Contact</NavLink>
          </li>
           <div className='relative md:hidden flex justify-center items-center gap-10  md:gap-30 py-5'>
          {
            isPendingCurrentUser ? <Loader/> :
            !isPendingCurrentUser && !currentUser ?
               <div className='flex items-center justify-center gap-3'>
                 <NavLink to="/register" className='text-white hover:text-(--main-color)'>Register</NavLink>
                 <span className=''>|</span>
                 <NavLink to="/login" className='text-white hover:text-(--main-color)'>Login</NavLink>
                </div>
             :
             <UserDropDown user={currentUser}/>
          }
         
          <div className='flex items-center gap-3'>
           <div  className='flex items-center gap-1' onClick={()=>navigate('/wishlist')}>
             <FaHeart size={20} color='var(--main-color)'/>
             <sub>({wishlistData.length})</sub>
           </div>
           <div className='flex items-center gap-1' onClick={()=>navigate('/cart')}>
             <FaCartShopping size={20} color='var(--main-color)'/>
             <sub>({cartData.length})</sub>
           </div>
          </div>
        </div>
          </div>
        
    </div>
  )
}
