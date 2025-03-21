import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

function Nav() {
  return (
    <div className='w-full h-[100px]  flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
      <IoFastFood className='w-[30px] h-[30px] text-green-500'/>
      </div>
      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl md:w-[70%] '>
      <FaSearch className=' text-green-500 w-[20px] h-[20px]  '/>
      <input type="text" placeholder='search items...' className='w-[100%] outline-none text-[16px] md:text-[20px] ' />

      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
        <span className=' absolute top-0 right-2 text-green-500 font-bold text-[18px]'>0</span>
      <FiShoppingBag className='w-[30px] h-[30px] text-green-500' />
      </div>
      
    </div>
  )
}

export default Nav
