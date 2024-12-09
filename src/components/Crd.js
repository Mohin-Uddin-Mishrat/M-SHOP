import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addCart } from '../Redux/Cartslice'
import { Link, useNavigate } from 'react-router-dom'
import { setDetails } from '../Redux/ProductSlice'

export const Crd = ({product}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCart = (e)=>{
    e.preventDefault()
    dispatch(addCart(product))
    alert('Cart added Successfully')

  }
  const handelDetails = (e)=>{
    e.preventDefault()
    dispatch(setDetails(product))
    navigate('/details')

  }
  return (
    <div onClick={handelDetails}>
      <div className='relative p-5 rounded-lg shadow-lg m-1  hover:scale-105 transition-all duration-300 ease-in'>
         <img className=' object-contain w-full h-32' src={product.image}></img>
         <h1>{product.title.slice(0, 10)}....</h1>
         <h1>{product.price}</h1>
         <div className='flex items-center'>
          <FaStar className='text-yellow-300'></FaStar>
          <FaStar className='text-yellow-300'></FaStar>
          <FaStar className='text-yellow-300'></FaStar>
          <FaStar className='text-yellow-300'></FaStar>
          <FaStar className=''></FaStar>
         </div>
         <div className='absolute group right-2 bottom-5 text-white font-bold bg-slate-600 text-1xl  px-2 rounded-full transition-all duration-300 ease-in'>
            <button className=' group-hover:hidden'>+</button>
            <button onClick={handleCart} className=' hidden group-hover:block '>Add to Cart</button>
         </div>
      </div>
    </div>
  )
}
