import React from 'react'
import Navbar from './NavbarHome'
import MembersContainer from './MembersContainer'
import ItemPLContainer from './ItemPLContainer'
import { IoCopyOutline } from "react-icons/io5";

const CreateGroup = () => {
  return (
    <div className='bg-gradient-to-r from-[#2d2965] via-[#4b477f] to-rose-500 text-white h-screen'>
      <Navbar/>
      <div className='bg-gradient-to-r from-[#2d2965] via-[#4b477f] to-rose-500 text-white '>
          <h1 className='text-w font-bold md:text-7xl sm:text-6xl text-5xl py-16 px-32 md:text-left text-center'>GROUP NAME</h1>
      </div>
      <div className=' flex flex-col md:flex-row sm:flex-row gap-1 bg-gray-200 '>
            <MembersContainer/>
           
            <div className='bg-gray-200'>
                <div className='m-5 w-1/2'>
                    <label for="first_name" class="block mb-2 text-sm font-medium ">Group Code</label>
                    <input type="text"  class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 cursor-not-allowed " placeholder="Group Name" value="Code" disabled/>
                </div>

                <div className='m-5 w-1/2'>
                    <label for="first_name" class="block mb-2 text-sm font-medium ">Group Name</label>
                    <input type="text"  class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Group Name" />
                </div>
              
              <div className='ml-5 mr-5'>
              <label for="first_name" class="block mb-2 text-sm font-medium ">Select a Genre</label>
                <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 ">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
              </div>

              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 border border-blue-700 rounded">
                Save Changes
            </button>

            </div>
            <ItemPLContainer/>
      </div>
    
    </div>
  )
}

export default CreateGroup
