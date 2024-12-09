import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaArrowDown } from 'react-icons/fa'
import { FaDownLong } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export const Checkout = ({setOrder}) => {
  const [billinToggle, setBillingTogle] = useState(false)
  const [ShippingToggle, setShippingTogle] = useState(false)
  const [paymentToggle, setPaymentTogle] = useState(false)
  const navigate = useNavigate()
  const carts = useSelector(state => state.cart)
  const [shippingInfo , setShippinInfo] = useState({
    Address :'', 
    city :'',
    Zip_code: '',
  })

  const handleSubmit = ()=>{
    const newOrder = {
      order_no:'mishrat1234',
      products : carts,
      shippingInfo
  
    }
    setOrder(newOrder)
    navigate('/order_confirm')
  }

  return (
    <div className='md:w-[85%] mx-auto p-2 my-5'>
      <h3>Checkout</h3>
      <div className='flex flex-col md:flex-row md:space-x-5'>
        <div className='md:w-2/3 '>
          <div className='border rounded-sm p-3 mb-5 border-gray-400'>

            <div onClick={() => setBillingTogle(!billinToggle)} className='flex justify-between items-center cursor-pointer'>
              <h3 className='font-semibold'>Billing Informatoin</h3>
              <span>{billinToggle ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}</span>
            </div>

            <div className={`text-gray-600 overflow-hidden transition-all duration-700 ease-in-out ${billinToggle ? "max-h-[1000px]" : "max-h-0"}`}>
              <span>Name</span>
              <input placeholder='Enter your name' className='block outline-none border border-gray-400 py-1 rounded-sm w-full px-4 mb-4'></input>
              <span>Email</span>
              <input placeholder='Enter your Email' className='block outline-none border border-gray-400 py-1 rounded-sm w-full px-4 mb-4'></input>
              <span>Phone</span>
              <input placeholder='Enter your Phone Number' className='block outline-none border border-gray-400 py-1 rounded-sm w-full px-4 mb-4'></input>
            </div>
          </div>


          <div className='border rounded-sm p-3 mb-5 border-gray-400'>

            <div onClick={() => setShippingTogle(!ShippingToggle)} className='flex justify-between items-center cursor-pointer'>
              <h3 className='font-semibold'>Shipping Informatoin</h3>
              <span>{ShippingToggle ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}</span>
            </div>

            <div className={`text-gray-600 overflow-hidden transition-all duration-700 ease-in-out ${ShippingToggle ? "max-h-[1000px]" : "max-h-0"} `}>
              <span>Address</span>
              <input placeholder='Enter your Address' onChange={(e)=> setShippinInfo({...shippingInfo ,address: e.target.value})} className='block outline-none border border-gray-400 py-1 rounded-sm w-full px-4 mb-4'></input>
              <span>City</span>
              <input placeholder='Enter your city' onChange={(e)=> setShippinInfo({...shippingInfo ,city: e.target.value})} className='block outline-none border border-gray-400 py-1 rounded-sm w-full px-4 mb-4'></input>
              <span>Zip Code</span>
              <input placeholder='Enter your Zip Code' onChange={(e)=> setShippinInfo({...shippingInfo ,Zip_code: e.target.value})} className='block outline-none border border-gray-400 py-1 rounded-sm w-full px-4 mb-4'></input>
            </div>
          </div>


          <div className='border rounded-sm p-3 mb-5 border-gray-400'>

            <div onClick={() => setPaymentTogle(!paymentToggle)} className='flex justify-between items-center cursor-pointer'>
              <h3 className='font-semibold'>Payment Method</h3>
              <span>{paymentToggle ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}</span>
            </div>

            <div className={`text-gray-600 overflow-hidden transition-all duration-700 ease-in-out ${paymentToggle ? "max-h-[1000px]" : "max-h-0"}`}>
              <input type='radio'  ></input>
              <span className='font-semibold'>Cash On Delivery</span>
            </div>
          </div>
        </div>

        <div className='p-4 border md:w-1/3  border-gray-400 rounded-lg font-semibold text-[15px]'>
          <div className='flex justify-between my-2'>
            <h1 className='font-semibold'>Order Summery:</h1>
          </div>
          
          {
            carts.cart.map((product , key) =>(
              <><hr></hr>
              <div className='flex justify-between py-2'>
                <div className='flex items-center space-x-2'>
                  <img className='object-contain h-20' src={product.image}></img>
                  <div>
                    <span className='block'>{product.name.slice(0,10)}...</span>
                    <span className='block'>{product.quantity} x ${product.price}</span>
                  </div>
                </div>
                <h3>${product.subTotalPrice}</h3>
              </div>
              <hr></hr>
              </>
            ))
          }
          
          <div className='font-semibold flex justify-between my-3'>
            <p className=''>Total Price</p>
            <p>${carts.totalPrice.toFixed(2)}</p>
          </div>
          <div className='flex justify-center items-center '>
            <button  onClick={handleSubmit} className='bg-red-500  text-center p-2 w-full'>Proceed to Checkout</button>
          </div>
        </div>

      </div>
    </div>
  )
}
