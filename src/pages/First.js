import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../Redux/ProductSlice'
import { Crd } from '../components/Crd'
import { Demo } from '../components/Demo'
import { InforSection } from '../components/InforSection'

export const First = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const product = useSelector(state => state.product)
  

  useEffect(() => {
    const fetcData = async () => {
      try {
        const response = await fetch('https://fakestoreapiserver.reactbd.com/amazonproducts/')
        const resData = await response.json()
        setData(resData)
        dispatch(addProduct(resData))

      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetcData()
  }, [])

  

  if (loading) return <h1>Loading..</h1>
  if (error) return <h1>Error : {error.message}</h1>
  return (
   <div>
    <div className='hidden md:block'><Demo></Demo></div>
     <div className='md:w-[90%] mx-auto my-10'>
      <h1 className='text-2xl font-semibold text-gray-600 my-5'>Top Products</h1>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 '>
        {product.products.slice(0, 10).map((product, key) => (
          <Crd product={product}></Crd>
        ))}
      </div>
    </div>
    <div className=''><InforSection></InforSection></div>
    
    <div>
      
    </div>
   </div>
  )
}
