import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();
   
  return (
    <div className='text-white bg-indigo-950 flex justify-between items-center h-16 mx-auto px-4'>
        <button className='inline-flex p-8' onClick={() => navigate("/home")}>
            <p className='w-full text-2xl font-bold text-rose-500'>Spo</p>
            <p className='w-full text-2xl font-bold text-white'>mix</p>
        </button>
        <ul className='md:flex '>
            <button className='p-8 bg-rose-500 text-white hover:bg-rose-600 w-32 h-10 rounded-md text-center my-6 mx-auto py-2 font-normal'>Log out</button>
        </ul>
    </div>
  )
}

export default Navbar
