import React, { useState } from 'react'

import laptop from '../Assets/laptop.jpg'
import cloths from '../Assets/cloths.jpg'
import mobile from '../Assets/mobile.jpg'
import { useSelector } from 'react-redux'
export const Demo = () => {
    
      const products  = useSelector(state=> state.product.products)
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
      };
    
      const prevSlide = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + 5) % 5
        );
      };
      

      console.log(products)
    return (
        <div className="relative w-full max-w-4xl mx-auto shadow-lg rounded-lg my-7 overflow-hidden">
            {/* Carousel Wrapper */}
            <div
                className="flex transition-transform duration-500 ease-in-out "
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {products.map((slide, index) => (
                    <div key={slide.id} className="w-full  justify-end flex md:h-[500px] flex-shrink-0 rounded-lg  relative">
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className=" h-64 md:h-[400px]  object-contain rounded-lg"
                        />
                        <div className='absolute top-[30%] left-6 w-[60%]'>
                            <h1 className='text-2xl font-bold'>HighQuality Product</h1>
                            <h1 className='font-bold text-red-500'>Delivery charge free</h1>
                            <p className='italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis malesuada purus, vitae molestie ipsum. Sed malesuada, ex id efficitur convallis, ipsum justo tempor purus, sed egestas mauris mi ut risus. Suspendisse eu nunc et dui convallis blandit. Nunc dictum</p>
                            <button  className='p-2 bg-red-500 rounded-lg text-white font-semibold'>Buy now</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
                &gt;
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[1,2,3,4,5].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-red-500" : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>
        </div>
    );

}
