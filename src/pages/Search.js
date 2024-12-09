import React from 'react'
import { useSelector } from 'react-redux'
import { Crd } from '../components/Crd'

export const Search = () => {
  const products = useSelector(state => state.product.filterProduct)
  return (
    <div className='md:w-[90%] mx-auto my-5'>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 '>
        {products.map((product, key) => (
          <Crd product={product}></Crd>
        ))}
      </div>
    </div>
  )
}
