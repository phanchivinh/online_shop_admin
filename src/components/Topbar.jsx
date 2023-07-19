import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineSetting } from 'react-icons/ai'

const Topbar = () => {
  return (
    <div className='w-full h-12 bg-white sticky top-0 z-50 border border-b-blue-700'>
      {/* Topbar wrapper */}
      <div className='h-full py-0 px-5 flex items-center justify-between'>
        {/* Top Left */}
        <div className=''>
          {/* logo */}
          <span className='font-bold text-3xl text-violet-800'>V&T-admin</span>
        </div>
        {/* Top Right */}
        <div className='flex items-center'>
          {/* Top bar icons container*/}
          <div className='relative cursor-pointer mr-3'>
            <IoMdNotificationsOutline className='text-2xl' />
            {/* Top icon badge */}
            <span className='absolute top-[-5px] right-[-5px] bg-red-600 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center'>2</span>
          </div>
          {/* Top bar icons container*/}
          <div className='relative cursor-pointer mr-3'>
            <AiOutlineSetting className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
