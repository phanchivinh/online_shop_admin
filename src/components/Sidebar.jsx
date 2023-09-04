import React from 'react'
import { MdLineStyle, MdTimeline, MdTrendingUp } from 'react-icons/md'
import { HiOutlineUser } from 'react-icons/hi'
import { BiStore } from 'react-icons/bi'
import { BsCurrencyDollar, BsBarChart } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineMessage } from 'react-icons/ai'
import { VscFeedback } from 'react-icons/vsc'
import { RiCoupon2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    // Sidebar
    <div className='flex-1 h-[calc(100vh-50px)] sticky top-[50px]'>
      {/* Sidebar wrapper */}
      <div className='p-5 text-[#555] text-sm'>
        {/* Sidebar Menu */}
        <div className='mb-3'>
          {/* Sidebar title */}
          <h3 className='font-bold text-xs text-gray-400'>Dashboard</h3>
          {/* Sidebar List */}
          <ul className='p-1'>
            <Link to="/">
              <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><MdLineStyle className='text-base mr-1' />Home</li>
            </Link>
          </ul>
        </div>
        {/* Sidebar Menu */}
        <div className='mb-3'>
          {/* Sidebar title */}
          <h3 className='font-bold text-xs text-gray-400'>Quản lý</h3>
          {/* Sidebar List */}
          <ul className='p-1'>
            <Link to='/users'>
              <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><HiOutlineUser className='text-base mr-1' />Users</li>
            </Link>
            <Link to='/products'>
              <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><BiStore className='text-base mr-1' />Quản lý sản phẩm</li>
            </Link>
            <Link to="/orders">
              <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><BsCurrencyDollar className='text-base mr-1' />Giao dịch</li>
            </Link>
            <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><RiCoupon2Line className='text-base mr-1' />Mã giảm giá</li>
            <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><BsBarChart className='text-base mr-1' />Báo cáo</li>
          </ul>
        </div>
        {/* Sidebar Menu */}
        {/* <div className='mb-3'>
          <h3 className='font-bold text-xs text-gray-400'>Thông báo</h3>
          <ul className='p-1'>
            <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><AiOutlineMail className='text-base mr-1' />Mail</li>
            <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><VscFeedback className='text-base mr-1' />Feedback</li>
            <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><AiOutlineMessage className='text-base mr-1' />Messages</li>
          </ul>
        </div> */}
        {/* Sidebar Menu staff */}
        {/* <div className='mb-3'>
          <h3 className='font-bold text-xs text-gray-400'>Staff</h3>
          <ul className='p-1'>
            <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><PiBagSimpleBold className='text-base mr-1' />Manage</li>
            <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><MdTimeline className='text-base mr-1' />Analytics</li>
            <li className='flex items-center p-1 hover:bg-gray-200 rounded-lg active:bg-gray-200 cursor-pointer'><TiWarningOutline className='text-base mr-1' />Reports</li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default Sidebar
