import React from 'react'
import image from '../Assets/cloths.jpg'
export const Test = () => {
  return (
    <div className='my-[100px] bg-slate-400 w-[700px] mx-auto h-[400px]'>
        <div className='bg-slate-100 '>
            <img src={image} className='w-10 '></img>
        </div>
    </div>
  )
}
