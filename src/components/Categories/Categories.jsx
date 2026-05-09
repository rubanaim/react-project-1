import './Categories.css'
import { MdDone } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
export default function Categories() {
  return (
    <div className='Categories flex flex-col justify-center items-center gap-10  md:px-8 sm:px-10 px-15 mx-auto xl:mt-20 mt-10'>
      <h2 className='text-4xl font-bold text-(--main-color)'>Services</h2>
       <div className='container grid grid-cols-1 md:grid-cols-12 gap-5 mx-auto'>
        <div className='card lg:col-span-3 md:col-span-6 '>
            <div className='flex bg-white ps-7 py-6 text-xl font-sans text-Black items-center gap-2 '>
             <MdDone className='text-(--main-color) text-2xl' />
             <p>Quality Product</p>
          </div>
        </div>
         <div className='card lg:col-span-3 md:col-span-6'>
          <div className='flex bg-white ps-7 py-6 text-xl font-sans text-Black items-center gap-2'>
             <MdLocalShipping className='text-(--main-color) text-2xl'/>
             <p>Free Shipping</p>
          </div>
         </div>
         <div className='card lg:col-span-3 md:col-span-6'>
            <div className='flex bg-white ps-7 py-6 text-xl font-sans text-Black items-center gap-2 '>
             <MdDone className='text-(--main-color) text-2xl' />
             <p>Quality Product</p>
          </div>
        </div>
         <div className='card lg:col-span-3 md:col-span-6'>
          <div className='flex bg-white ps-7 py-6 text-xl font-sans text-Black items-center gap-2'>
             <MdLocalShipping className='text-(--main-color) text-2xl'/>
             <p>Free Shipping</p>
          </div>
         </div>
       </div>
    </div>
  )
}
