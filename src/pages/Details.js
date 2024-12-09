import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Redux/Cartslice";

const Details = () => {
    const productDetails = useSelector(state => state.product.details)
    const dispatch = useDispatch()
    const handleCart = (e)=>{
      e.preventDefault()
      dispatch(addCart(productDetails))
      alert('Cart added Successfully')
  
    }
  console.log(productDetails)
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
        <div>
          <img
            src={productDetails.image}
            
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{productDetails.category}</h1>
          <p className="text-xl text-gray-600 mt-2">${productDetails.price}</p>
          <p className="text-gray-700 mt-4">{productDetails.description}</p>
          <p className="text-gray-500 mt-2">
            
          </p>

         
          <div className="mt-6 flex items-center space-x-4">
            { (
              <button
               onClick={handleCart} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
              >
                Add to Cart
              </button>
            ) }

            <button
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
