import React, { useState } from 'react'

export const ChangeAddress = ({setAddress ,setModalOpen }) => {
    const [newAddress , setNewAddress] = useState('')
    const address =(e)=>{
        e.preventDefault()
        setAddress(newAddress)
        setModalOpen(false)
    }
  return (
    <div>
        <h1 className='font-semibold'>Change Address</h1>
        <input onChange={(e)=> setNewAddress(e.target.value)} placeholder='Change Your Address' className='outline-none border-2 border-gray-300 w-full p-2 rounded-sm'></input>
        <div className='flex justify-end space-x-3 mt-5'>
            <button onClick={()=> setModalOpen(false)} className='p-2 text-white  rounded-lg bg-slate-500 '>Cancel</button>
            <button onClick={address} className='p-2 text-white px-4 rounded-lg  bg-slate-500'>Ok</button>
        </div>
    </div>
  )
}
