import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

export const InforSection = () => {

    const info = [
        {
            icon : <FaShippingFast className='text-yellow-300 text-4xl'></FaShippingFast>,
            title:'Free Shipping',
            description:'Get your order delivered with no extra cost'
        },
        
        {
            icon : <FaHeadset className='text-yellow-300 text-4xl'></FaHeadset>,
            title:'Support 24/7',
            description:'We are here to assist you any time'
        },
        {
            icon : <FaMoneyBill1Wave className='text-yellow-300 text-4xl'></FaMoneyBill1Wave>,
            title:'100% Money back',
            description:'Full fund refund if you are not satisfied'
        },
        {
            icon : <FaLock className='text-yellow-300 text-4xl'></FaLock>,
            title:'Payment secure',
            description:'Your  money information is safe with us'
        },
        {
            icon : <FaTag className='text-yellow-300 text-4xl'></FaTag>,
            title:'Discount',
            description:'Enjoy the best prices on our products'
        },
    ]
  return (
    <div className='flex flex-col md:flex-row  justify-between my-5 md:w-[90%] mx-auto'>
        {
            info.map((card, key)=>  (
                <div key={key} className='border border-gray-400 rounded-lg p-4 my-3 md:mx-3'>
                    <div className='flex flex-col justify-center items-center '> <span className=''>{card.icon}</span>
                    <span className='font-semibold'>{card.title}</span>
                    <span className='text-center'>{card.description}</span> </div>
                </div>
            ) )
        }
    </div>
  )
}
