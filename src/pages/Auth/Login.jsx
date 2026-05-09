import './Auth.css'
import { useState } from 'react'
import {  IconButton, InputAdornment, TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import loginSchema from '../../validation/loginValidation'
import { zodResolver } from '@hookform/resolvers/zod';
import useAuth from '../../zustant/authSlice';
import Loader  from '../../common/Loader';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Login() {
  const {register, handleSubmit,formState: { errors, isDirty, isValid },} = useForm({
    resolver: zodResolver(loginSchema),
    mode:'all',
  })
  const[err,setErr]=useState(null)
  const navigate = useNavigate()
  const submitHandlerForm =async(data) => {
    const res= await loginHandler(data)
    if(res.success){
      setErr(null)
      navigate('/')
      scrollTo({top:0})
      //if I have error use toast.error('')
      toast.success('Success Login :)')
    }else{
     setErr(res.message)
    }
  }
  const[isVisible, setIsvisible] = useState(false)
  const loginHandler = useAuth(s=>s.loginHandler)
  const isPendingLogin = useAuth(s=>s.isPendingLogin)

  return (
    <div className='Login container mx-auto'>
        <h1 className='w-max mx-auto mt-10 font-bold text-3xl underline'><span className='text-(--main-color)'>Login</span>   Now</h1>
        <form onSubmit={handleSubmit(submitHandlerForm)} action="" className='border bg-white shadow rounded sm:p-7 p-4 md:w-[70%] sm:w-[80%]  w-[90%] mx-auto mt-10'>
          <p className='text-indigo-700 text-shadow-blue-300 md:text-2xl sm:text-xl text-md font-semibold mb-5'>Welcome Back: </p>
          <div className='flex flex-col  gap-3 px-5'>
            <TextField 
                   helperText={errors.email?.message}
                   error={errors.email}
                   type='email'
                   label= "Email"
                   variant="outlined"
                   fullWidth
                    {...register('email')}
                 /> 
            <TextField 
                   helperText={errors.password?.message}
                   error={errors.password}
                   type={ isVisible ? 'text' : 'password'}
                   label= "Password"
                   variant="outlined"
                   fullWidth
                    {...register('password')}
                    InputProps={{
                      endAdornment:(
                        <InputAdornment>
                          <IconButton onClick={()=>setIsvisible(prev=>!prev)}>
                            {
                              !isVisible ?<FaEye /> :<FaEyeSlash />
                            }
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                 /> 
                 {
                  err &&
                  <div className='lg:w-100 md:w-85 sm:w-75 bg-red-300 rounded text-red-800 lg:text-2xl md:text-xl sm:text-lg font-bold p-3 text-center m-auto'>{err}</div>
                 }
                 <button 
                 disabled={!isValid||!isDirty||isPendingLogin}
                 className='w-max mx-auto rounded border bg-(--secondary-color) text-white px-8 py-3 hover:not-disabled:bg-white hover:not-disabled:text-(--secondary-color) hover:not-disabled:scale-90 hover:not-disabled:shadow-gray-600 duration-300 hover:not-disabled:border-(--secondary-color) disabled:cursor-not-allowed disabled:opacity-50'>
                  {
                    isPendingLogin ? <Loader /> : 'Login'

                  }
                
                  </button>
          </div>
        </form>
    </div>
  ) 
}
