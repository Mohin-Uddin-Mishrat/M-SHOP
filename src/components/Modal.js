import React from 'react'
import { FaCross } from 'react-icons/fa'

export const Modal = ({ children, setModalOpen }) => {
    return (
        <div className='fixed bg-gray-800 inset-0 bg-opacity-75 flex justify-center items-center z-50'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md  '>
                <button onClick={() => setModalOpen(false)} className='absolute top-4 right-4 text-3xl text-gray-300 '>
                    &times;
                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
