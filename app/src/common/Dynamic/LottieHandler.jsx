import React from 'react'
import {useLottie} from 'lottie-react'
import LottieLoading from '../../assets/lottiFils/Loading.json'
import error from '../../assets/lottiFils/Error 404.json'
import { Link } from 'react-router-dom'
export default function LottieHandler({status}) {
    const options ={
        animationData : status === 'main' ?  LottieLoading : error,
        loop: true
    };
    const {View}= useLottie(options)
  return (
  <div className='p-10 flex flex-col justify-center items-center'>G
    <div className='w-75'>
        {View}
    </div>
    {
        status === 'main' ? 
        <p>Plz wait Home page Loading......</p>
        :
        <div className='text-center'>
          <p className='text-red-500 font-semibold'>Something went wrong. Please try again later.</p>
          <Link to="/" replace={true} className='text-blue-500 underline'>
            Go back to Home
          </Link>
        </div>
       
    }
    </div>
  )
}
