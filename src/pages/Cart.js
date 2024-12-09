import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import empty from '../Assets/empty cart.png'
import { FaDeleteLeft } from 'react-icons/fa6'
import { decreamentCart, deleteCart, increamentCart } from '../Redux/Cartslice'
import { Modal } from '../components/Modal'
import { ChangeAddress } from '../components/ChangeAddress'
import { Link } from 'react-router-dom'
export const Cart = () => {
  const[address , setAddress] = useState('Dhaka , badda ,Satarkul ')
  const [isModalOpen , setModalOpen] = useState(false)
  const dispatch = useDispatch()
  const carts = useSelector(state => state.cart)
  const handleIncreament =(e,id) =>{
    e.preventDefault()
    dispatch(increamentCart(id))

  }
  const handleDecreament =(e,id) =>{
    e.preventDefault()
    dispatch(decreamentCart(id))

  }
  
  const handleDelete =(e,cart) =>{
    e.preventDefault()
    dispatch(deleteCart(cart))

  }
  

  return (
    <>
      {carts.cart.length > 0 ?
        <div className='w-full md:w-[85%] mx-auto px-2  my-10 relative'>
          <h1 className='font-bold text-2xl text-gray-500 mb-4'>SHOPING  CART</h1>
          <div className='flex flex-col md:flex-row space-x-3 justify-between '>

            <div className='md:w-2/3 w-full '>

              <div className='flex items-center'>
                <div className='w-2/3 '>
                  <p className='font-semibold text-[13px]'>PRODUCT</p>
                </div>
                <div className='flex w-full justify-between  items-center'>
                  <div className='font-semibold text-[11px] '>PRICE</div>
                  <div className='font-semibold text-[11px] '>QUANTITY</div>
                  <div className='font-semibold text-[11px] '>SUBTOTAL</div>
                  <div className='font-semibold text-[11px] '>REMOVE</div>
                </div>
              </div>
              
             
              {carts.cart.map((cart ,key) => (
                <div className='flex items-center rounded-lg my-3 shadow-sm p-2 shadow-gray-800'>
                <div className='w-2/3  flex items-center space-x-4'>
                  <img className='object-contain h-20' src={cart.image}></img>
                  <p className='font-semibold text-[13px]'>{cart.name}</p>
                </div>
                <div className='flex w-full justify-between  items-center'>
                  <div className='font-semibold text-[15px] '>${cart.price}</div>
                  <div className='font-semibold text-[16px] border-2 border-gray-400  grid grid-cols-3 divide-x-2'>
                    <button onClick={(e)=>handleDecreament(e,cart.id)} className='px-2'>-</button>
                    <p className='px-2'>{cart.quantity}</p>
                    <button onClick={(e)=>handleIncreament(e,cart.id)} className='px-2'>+</button>
                  
                  </div>
                  <div className='font-semibold text-[15px] '>${cart.subTotalPrice.toFixed(2)}</div>
                  <button className='font-semibold text-[20px] ' onClick={(e)=> handleDelete(e, cart)}><FaDeleteLeft></FaDeleteLeft></button>
                </div>
              </div>
              ))}
              
             

            </div>

            <div className='p-10 border md:w-1/3  border-gray-400 rounded-lg font-semibold text-[15px]'>
              <h1 className='font-semibold'>CART TOTALS</h1>
              <div className='flex justify-between my-2'>
                 <h1>CART ITEMS:</h1>
                 <p>{carts.totalQuantity}</p>
              </div>
              <hr></hr>
              <h1>Shipping:</h1>
              <div className='my-1 pl-2'>
                <p className='font-semibold'>{address}</p>
                <button onClick={()=> setModalOpen(true)} className='text-blue-500'>Change Address</button>
              </div>
              <hr></hr>
              <div className='font-semibold flex justify-between my-3'>
                <p className=''>Total Price</p>
                <p>{carts.totalPrice.toFixed(2)}</p>
              </div>
              <div className='flex justify-center '>
                <Link to='/checkout' className='bg-red-500  p-2 w-full'>Proceed to Checkout</Link>
              </div>
            </div>

          </div>

          {isModalOpen ? <Modal setModalOpen={setModalOpen}> <ChangeAddress setAddress={setAddress} setModalOpen={setModalOpen} set></ChangeAddress></Modal> : <span></span>}

        </div> :
        <div className='flex justify-center items-center mt-7'>
          <div>
            <h1 className='text-gray-500 text-2xl font-bold text-center'>Your cart is empty</h1>
            <img src={empty}></img>
          </div>
        </div>
      }
    </>
  )
}
