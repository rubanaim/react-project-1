import './Auth.css'
import { useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, Radio, RadioGroup, TextField, FormHelperText } from '@mui/material'
import { useForm } from "react-hook-form"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import registerSchema from '../../validation/registerValidation'
import { zodResolver } from '@hookform/resolvers/zod';
import useAuth from '../../zustant/authSlice';
import Loader  from '../../common/Loader';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Register() {
  const {register, handleSubmit,formState: { errors, isDirty, isValid },} = useForm({
    resolver: zodResolver(registerSchema),
    mode:'all',
  })
  const[err,setErr]=useState(null)
  const navigate = useNavigate()
  const submitHandlerForm =async(data) => {
    const res= await registerHandler(data)
    if(res.success){
      setErr(null)
      navigate('/')
      scrollTo({top:0})
      //if I have error use toast.error('')
      toast.success('Success SignUp')
    }else{
     setErr(res.message)
    }
  }
  const[isVisible, setIsvisible] = useState(false)
  const[isVisible2, setIsvisible2] = useState(false)
  const registerHandler = useAuth(s=>s.registerHandler)
  const isPendingRegister = useAuth(s=>s.isPendingRegister)

  return (
    <div className='Register container mx-auto'>
        <h1 className='w-max mx-auto mt-10 font-bold text-3xl underline'><span className='text-(--main-color)'>Register</span>   Now</h1>
        <form onSubmit={handleSubmit(submitHandlerForm)} action="" className='border bg-white shadow rounded sm:p-7 p-4 md:w-[70%] sm:w-[80%]  w-[90%] mx-auto mt-10'>
          <p className='text-indigo-700 text-shadow-blue-300 md:text-2xl sm:text-xl text-md font-semibold mb-5'>Welcome, Please Enter your data</p>
          <div className='flex flex-col  gap-3 px-5'>
            <div className='flex gap-3 w-full sm:flex-row flex-col'>
                <TextField 
                  helperText={errors.firstName?.message}
                   error={errors.firstName}
                   label= "First Name"
                   variant="outlined"
                   fullWidth 
                   {...register('firstName')}
                 /> 
                <TextField 
                   helperText={errors.lastName?.message}
                   error={errors.lastName}
                   label= "Last Name"
                   variant="outlined"
                   fullWidth 
                   {...register('lastName')}
                 /> 
            </div>
            <TextField 
                  helperText={errors.phone?.message}
                   error={errors.phone}
                   type='number'
                   label= "Phone Number"
                   variant="outlined"
                   fullWidth 
                   {...register('phone')}
                 /> 
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
            <TextField 
                   helperText={errors.confirmPassword?.message}
                   error={errors.confirmPassword}
                  type={ isVisible2 ? 'text' : 'password'}
                   label= "Confirm Password"
                   variant="outlined"
                   fullWidth 
                   {...register('confirmPassword')}
                   InputProps={{
                      endAdornment:(
                        <InputAdornment>
                          <IconButton onClick={()=>setIsvisible2(prev=>!prev)}>
                            {
                              !isVisible2 ?<FaEye /> :<FaEyeSlash />
                            }
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                 /> 
                 <FormControl error={errors.gender}>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <FormHelperText>{errors.gender?.message}</FormHelperText>
                    <RadioGroup
                    >
                      <FormControlLabel {...register('gender')} value="female" control={<Radio />} label="Female" />
                      <FormControlLabel {...register('gender')} value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                 </FormControl>
                 {
                  err &&
                  <div className='lg:w-100 md:w-85 sm:w-75 bg-red-300 rounded text-red-800 lg:text-2xl md:text-xl sm:text-lg font-bold p-3 text-center m-auto'>{err}</div>
                 }
                 <button 
                 disabled={!isValid||!isDirty||isPendingRegister}
                 className='w-max mx-auto rounded border bg-(--secondary-color) text-white px-8 py-3 hover:not-disabled:bg-white hover:not-disabled:text-(--secondary-color) hover:not-disabled:scale-90 hover:not-disabled:shadow-gray-600 duration-300 hover:not-disabled:border-(--secondary-color) disabled:cursor-not-allowed disabled:opacity-50'>
                  {
                    isPendingRegister ? <Loader /> : 'Confirm'

                  }
                
                  </button>
          </div>
        </form>
    </div>
  ) 
}
  