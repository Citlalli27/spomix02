import React from 'react'

const Group = () => {
  return (
    <div className=' bg-indigo-950  rounded hover:bg-white  hover:bg-opacity-50 hover:text-indigo-950 mb-5 p-5 w-1/3 cursor-pointer flex'>
        <div>
        <p className='font-bold md:text-lg text-sm'>Name</p>
         <p className=' md:text-lg text-sm'>Genre</p>
         <p className=' md:text-lg text-sm'>Members</p>
        </div>
        
      </div>     
  )
}

export default Group
