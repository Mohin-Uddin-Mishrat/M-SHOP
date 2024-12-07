import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { searchProduct } from '../Redux/ProductSlice'
import { FaBars, FaSearch, FaUser } from "react-icons/fa"
import { FaCartShopping } from 'react-icons/fa6'

export const Navbar = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(searchProduct(search))
    navigate('/search')

  }
  return (
    <div>

      <div className=' shadow-lg pb-5'>
        <div className='  md:pl-10 flex space-x-4 md:space-x-28 bg items-center p-4'>
          <span className='font-bold text-red-500 text-2xl'>M-Shop</span>
          <div className='flex items-center  rounded-sm border border-gray-400 w-2/3 '>
            <span className='inset-y-0 left-0 p-1'><button onClick={handleSearch} className='text-gray-400'><FaSearch />  </button></span>
            <input placeholder="Enter text here" onChange={(e) => setSearch(e.target.value)} className='outline-none w-full p-1 '></input>
          </div>
          <div className='flex items-center space-x-6 relative text-2xl'>
            <Link to='/cart' className='text-red-500'><span><FaCartShopping></FaCartShopping></span>
            {0 < cart.cart.length ?  <span className='absolute -top-4 left-5  text-[10px] rounded-full px-2 bg-red-600 text-white font-bold '>{cart.totalQuantity}</span> : <></>}
            </Link>
            <span className='text-red-600 hidden md:block'><FaUser></FaUser></span>
            <span  className='text-red-600  md:hidden'><FaBars></FaBars></span>
          </div>
        </div>

        <ul className='flex space-x-10 font-semibold  text-gray-600 items-center justify-center mx-auto'>
          <Link className='hover:text-gray-400' to='/'><li>Home</li></Link>
          <Link className='hover:text-gray-400' to='/products'><li>Products</li></Link>
          <Link className='hover:text-gray-400' to='/contact'><li>Contacts</li></Link>
          <Link className='hover:text-gray-400' to='/about'><li>About</li></Link>
        </ul>
      </div>





      
    </div>
  )
}
