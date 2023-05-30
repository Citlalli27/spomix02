import React from 'react'
import Group from './Group'
import { IoIosAddCircle } from "react-icons/io";

const GroupsContainer = () => {

 
  return (
    <div className=''>
      <div className=''>
          <h1 className='text-w font-bold md:text-7xl sm:text-6xl text-5xl py-16 px-32 md:text-left text-center'>MY GROUPS</h1>
      </div>

    <div className='flex  flex-wrap justify-center gap-10'>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
    </div>
    </div>
  )
}

export default GroupsContainer
