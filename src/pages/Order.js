import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Order = ({order}) => {
  const navigate = useNavigate()
  if(!order?.shippingInfo) {
    alert('Your order is not placed')
    navigate('/cart')
  }
  return (
    <div className='md:w-[85%] m-2 mx-auto'>
        <h2 className='text-2xl font-semibold'>Thank you for your order</h2>
        <p>Your order is placed successfully , You will receive a email shortly </p>
        <div className='p-3 bg-slate-300 rounded-lg '>
            <h1 className='font-semibold'>Order Summery</h1>
            <p className='italic pb-2'>Order Number : {order?.order_no}</p>
            <h1 className='font-semibold'>Shipping Informatoin</h1>
            <p className='italic pb-2'> {order?.shippingInfo?.address} {order?.shippingInfo?.city}</p>
            <h1 className='font-semibold'>Total Price</h1>
            <p className='italic pb-2'> {order?.products?.totalPrice}</p>
        </div>
    </div>
  )
}
