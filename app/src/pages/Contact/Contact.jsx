import React from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TextField } from '@mui/material';
import { FaRegMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 mt-20  w-[80%] mx-auto relative'>
      <h1 className='text-4xl font-bold'>Contact <span className='text-(--main-color)'>US</span></h1>
      <div className='flex justify-center lg:flex-row flex-col items-start gap-5 w-[100%]'>
          <form className='flex flex-col gap-5 p-7 rounded justify-center items-start bg-white lg:w-[70%] w-[100%]'>
         <TextField 
         fullWidth
         label="Name" 
         variant="filled" />
         <TextField 
         fullWidth
         label="Email" 
         variant="filled" />
         <TextField 
         fullWidth
         label="Subject" 
         variant="filled" />
         <TextField 
         fullWidth
         label="Message" 
         variant="filled" 
         multiline
         rows={7}
         />
         <button className='bg-(--main-color) w-[200px] py-3 rounded'>Send Message</button>
          </form>
      <div className='flex flex-col gap-5 w-[100%] lg:w-[30%]'>
        <div className='bg-white p-5  h-[250px] relative rounded '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27474.80196497434!2d31.534870862960812!3d30.59588273550992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sar!2seg!4v1775855423859!5m2!1sar!2seg" className='w-[100%] h-[100%]'></iframe>
        </div>
        <div className='bg-white flex flex-col gap-3 p-7 rounded'>
          <div className='flex gap-3 justify-start items-center'>
            <FaLocationCrosshairs className='text-(--ternary-color)'/>
            <p className='font-bold text-gray-700 sm:text-[15px] text-sm'>Egypt - Sharkia - Zagazig</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
            <FaRegMessage className='text-(--ternary-color)'/>
            <p className='font-bold text-gray-700 sm:text-[15px] text-sm'>furnitureshop@gmail.com</p>
          </div>
          <div className='flex gap-3 justify-start items-center'>
           <IoCall className='text-(--ternary-color)'/>
            <p className='font-bold text-gray-700 sm:text-[15px] text-sm'>+20 01134567</p>
          </div>
        </div>
          </div>
      </div>
    </div>
  )
}
