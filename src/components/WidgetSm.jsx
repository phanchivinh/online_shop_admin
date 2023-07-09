import React from 'react'
import { MdVisibility } from 'react-icons/md'

const WidgetSm = () => {
  return (
    <div className='flex-1 p-5 mr-5 shadow-lg shadow-blue-500'>
      {/* Widget Small Title */}
      <span className='text-xl font-semibold'>New Join Members</span>
      {/* Widget Small List */}
      <ul className='m-0 p-0'>
        {/* Widget Small List Item */}
        <li className='flex items-center justify-between mx-5 my-2'>
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='w-10 h-10 rounded-full object-cover' />
          {/* Widget Small User */}
          <div className='flex flex-col'>
            {/* Widget Small Username */}
            <span className='font-semibold'>Anna Keller</span>
            {/* Widget Small User Title */}
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center text-sm rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer hover:bg-blue-200 '>
            <MdVisibility className='text-base mr-1' />
            Display
          </button>
        </li>
        {/* Widget Small List Item */}
        <li className='flex items-center justify-between mx-5 my-2'>
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='w-10 h-10 rounded-full object-cover' />
          {/* Widget Small User */}
          <div className='flex flex-col'>
            {/* Widget Small Username */}
            <span className='font-semibold'>Anna Keller</span>
            {/* Widget Small User Title */}
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center text-sm rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer hover:bg-blue-200 '>
            <MdVisibility className='text-base mr-1' />
            Display
          </button>
        </li>
        {/* Widget Small List Item */}
        <li className='flex items-center justify-between mx-5 my-2'>
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='w-10 h-10 rounded-full object-cover' />
          {/* Widget Small User */}
          <div className='flex flex-col'>
            {/* Widget Small Username */}
            <span className='font-semibold'>Anna Keller</span>
            {/* Widget Small User Title */}
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center text-sm rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer hover:bg-blue-200 '>
            <MdVisibility className='text-base mr-1' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
