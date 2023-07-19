import React from 'react'
import { MdPermIdentity, MdPhoneAndroid, MdLocationOn, MdPublish } from 'react-icons/md'
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='flex-[4]'>
      {/* User Title Container */}
      <div className='flex items-center justify-between'>
        {/* User Title */}
        <h1 className='text-3xl font-semibold'>Edit User</h1>
        {/* User Add Btn */}
        <Link to="/newUser">
          <button className='w-20 p-1 bg-teal-500 rounded-md text-white'>Create</button>
        </Link>
      </div>
      {/* User Container */}
      <div className='flex mt-5'>
        {/* User show */}
        <div className='flex-1 p-5 shadow-lg shadow-blue-500'>
          {/* User show Top */}
          <div className='flex items-center'>
            <img alt='' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='w-10 h-10 rounded-full object-cover' />
            {/* USer show top title */}
            <div className='flex flex-col ml-5'>
              {/* User show Username */}
              <div className='font-semibold'>User Test</div>
              {/* User show Title */}
              <div className='font-light'>Nhân viên văn phòng</div>
            </div>
          </div>
          {/* User show Bottom */}
          <div className='mt-5'>
            {/* User Show Title */}
            <span className='text-sm font-semibold text-gray-400'>Account Details</span>
            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <MdPermIdentity className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>user99</span>
            </div>

            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <AiOutlineCalendar className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>01.02.1999</span>
            </div>

            <span className='text-sm font-semibold text-gray-400'>Contact Details</span>
            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <MdPhoneAndroid className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>+84 93 123 456</span>
            </div>

            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <AiOutlineMail className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>user99@gmail.com</span>
            </div>

            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <MdLocationOn className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>Ho Chi Minh city</span>
            </div>
          </div>
        </div>
        {/* User Update */}
        <div className='flex-[2] p-5 shadow-lg shadow-blue-500'>
          <div>
            {/* User Update Title */}
            <spa className='text-2xl font-semibold'>Edit</spa>
            {/* Update Form */}
            <form className='flex justify-between mt-5'>
              {/* Left */}
              <div>
                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Username</label>
                  <input type='text' placeholder='user99' className='w-60 h-8 border-b border-gray-400'></input>
                </div>

                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Full Name</label>
                  <input type='text' placeholder='User Test' className='w-60 h-8 border-b border-gray-400'></input>
                </div>

                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Email</label>
                  <input type='text' placeholder='user99@gmail.com' className='w-60 h-8 border-b border-gray-400'></input>
                </div>

                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Phone</label>
                  <input type='text' placeholder='+84 93 123 456' className='w-60 h-8 border-b border-gray-400'></input>
                </div>

                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Address</label>
                  <input type='text' placeholder='Ho Chi Minh city' className='w-60 h-8 border-b border-gray-400'></input>
                </div>
              </div>
              {/* Right */}
              <div className='flex flex-col justify-between'>
                {/* User update upload */}
                <div className='flex items-center'>
                  <img alt='' src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' className='w-24 h-24 rounded-lg object-cover mr-5' />
                  <label htmlFor='file'><MdPublish className='text-2xl cursor-pointer' /></label>
                  <input type='file' id='file' style={{ display: "none" }} />
                </div>
                {/* User update button */}
                <button className='rounded-md p-1 cursor-pointer bg-blue-700 hover:bg-blue-600 text-white font-semibold'>Update</button>
              </div>
            </form>
          </div>
        </div>

      </div >
    </div >
  )
}

export default User
