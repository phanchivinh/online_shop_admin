import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
const FeaturedInfo = () => {
  return (
    <div className='w-full flex justify-between'>
      {/* Featured Item */}
      <div className='flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer shadow-lg shadow-blue-300'>
        {/* Featured Title */}
        <span className='text-xl'>Revenue (Doanh thu)</span>
        {/* Featured Money Container */}
        <div className='mx-2 my-0 flex items-center'>
          {/* Feature Money */}
          <span className='text-3xl font-semibold'>$2,415,000</span>
          {/* Feature Money Rate */}
          <span className='flex items-center ml-5'>-11.4 </span>
          <AiOutlineArrowDown className='text-base ml-1 text-red-500' />
        </div>
        {/* Featured Subtitle */}
        <span className='text-sm text-gray-400'>So với tháng trước</span>
      </div>
      {/* ------------------------------------- */}
      {/* Featured Item */}
      <div className='flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer shadow-lg shadow-blue-300'>
        {/* Featured Title */}
        <span className='text-xl'>Sales (Doanh số)</span>
        {/* Featured Money Container */}
        <div className='mx-2 my-0 flex items-center'>
          {/* Feature Money */}
          <span className='text-3xl font-semibold'>$2,415,000</span>
          {/* Feature Money Rate */}
          <span className='flex items-center ml-5'>-11.4 </span>
          <AiOutlineArrowDown className='text-base ml-1 text-red-500' />
        </div>
        {/* Featured Subtitle */}
        <span className='text-sm text-gray-400'>So với tháng trước</span>
      </div>
      {/* ------------------------------------- */}
      {/* Featured Item */}
      <div className='flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer shadow-lg shadow-blue-300'>
        {/* Featured Title */}
        <span className='text-xl'>Cost (Chi phí)</span>
        {/* Featured Money Container */}
        <div className='mx-2 my-0 flex items-center'>
          {/* Feature Money */}
          <span className='text-3xl font-semibold'>$2,225,000</span>
          {/* Feature Money Rate */}
          <span className='flex items-center ml-5'>+2.4 </span>
          <AiOutlineArrowUp className='text-base ml-1 text-green-500' />
        </div>
        {/* Featured Subtitle */}
        <span className='text-sm text-gray-400'>So với tháng trước</span>
      </div>

    </div>
  )
}

export default FeaturedInfo
