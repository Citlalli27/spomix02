import React from 'react'
import NavbarHome from './NavbarHome'
import GroupsContainer from './GroupsContainer'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#2d2965] via-[#4b477f] to-rose-500 text-white  w-full'>
      <NavbarHome />
      <GroupsContainer/>
    </div>   
    
  )
}

export default Home
