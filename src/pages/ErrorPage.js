import React from 'react'
import errorimage from '../Assets/error.jpg'
export const ErrorPage = () => {
  return (
    <div className='relative W-full h-screen'>
        <img className=' w-full h-full object-cover' src={errorimage}></img>
        <h1 className='text-3xl font-bold absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>Page not found</h1>
    </div>
  )
}
