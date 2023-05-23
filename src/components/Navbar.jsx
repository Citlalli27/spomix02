import React, {useState} from 'react'
import {AiOutlineMenu} from'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='text-white bg-indigo-950 flex justify-between items-center h-28  mx-auto px-4'>
        <div className='inline-flex p-8'>
            <p className='w-full text-3xl font-bold text-rose-500'>Spo</p>
            <p className='w-full text-3xl font-bold text-white'>mix</p>
        </div>
        <ul className='hidden md:flex '>
            <li className='p-8 cursor-pointer'>About</li>
            <li className='p-8 cursor-pointer'>Contact</li>
        
        </ul>

        {/* Icono de barra lateral */}
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* NavBar lateral */}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-indigo-950 ease-in-out duration-500' : 'fixed left-[-100%]' }>
            <div className='inline-flex p-8'>
                <p className='w-full text-3xl font-bold text-rose-600'>Spo</p>
                <p className='w-full text-3xl font-bold text-white'>mix</p>
            </div>
            <ul className='p-5'>
                <li className='p-8 border-b cursor-pointer'>About</li>
                <li className='p-8 border-b cursor-pointer'>Contact</li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar
