import React, { useEffect, useState } from 'react'
import { MdPermIdentity, MdPhoneAndroid, MdLocationOn, MdPublish } from 'react-icons/md'
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { apiSingleUser } from '../mockData'
import { useSelector } from 'react-redux'

const User = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const accessToken = useSelector(state => state.auth.accessToken)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")

  const handleUpdate = async () => {
    try {
      const response = await publicRequest.post('/v1/management/users.update', {
        ...user,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        address: address
      }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      debugger
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await publicRequest.post()
      // const response = apiSingleUser
      setUser(response.data.user)
    }
    getUser()
  }, [])

  return (
    <div className='flex-[4]'>
      {/* User Title Container */}
      <div className='flex items-center justify-between'>
        {/* User Title */}
        <h1 className='text-3xl font-semibold'>Edit User</h1>
        {/* User Add Btn */}
        {/* <Link to="/newUser">
          <button className='w-20 p-1 bg-teal-500 rounded-md text-white'>Create</button>
        </Link> */}
      </div>
      {/* User Container */}
      <div className='flex mt-5'>
        {/* User show */}
        <div className='flex-1 p-5 shadow-lg shadow-blue-500'>
          {/* User show Top */}
          <div className='flex items-center'>
            {/* <img alt='' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='w-10 h-10 rounded-full object-cover' /> */}
            {/* USer show top title */}
            <div className='flex flex-col'>
              {/* User show Username */}
              <div className='font-semibold'>{`${user.last_name} ${user.first_name}`}</div>
              {/* User show Title */}
              <div className='font-light'>{user.id}</div>
            </div>
          </div>
          {/* User show Bottom */}
          <div className='mt-5'>
            {/* User Show Title */}
            <span className='text-sm font-semibold text-gray-400'>Thông tin tài khoản</span>
            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <MdPermIdentity className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>{user.email}</span>
            </div>

            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <AiOutlineCalendar className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>{user.create_date_time}</span>
            </div>

            <span className='text-sm font-semibold text-gray-400'>Thông tin liên lạc</span>
            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <MdPhoneAndroid className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>{user.phone_number}</span>
            </div>

            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <AiOutlineMail className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>{user.email}</span>
            </div>

            {/* -----User show Info----- */}
            <div className='flex items-center my-5 text-[#444]'>
              <MdLocationOn className='text-lg' />
              {/* Show Info Title */}
              <span className='ml-2'>{user.address}</span>
            </div>
          </div>
        </div>

        {/* User Update */}
        <div className='flex-[2] p-5 shadow-lg shadow-blue-500'>
          <div>
            {/* User Update Title */}
            <span className='text-2xl font-semibold'>Chỉnh sửa</span>
            {/* Update Form */}
            <form className='flex justify-between mt-5'>
              {/* Left */}
              <div>
                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Họ và tên đệm</label>
                  <input type='text' placeholder='user99' className='w-60 h-8 border-b border-gray-400' value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
                </div>

                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Tên</label>
                  <input type='text' placeholder='User' className='w-60 h-8 border-b border-gray-400' value={firstName} onChange={event => setFirstName(event.target.value)}></input>
                </div>

                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Phone</label>
                  <input type='text' placeholder='0903 123 456' className='w-60 h-8 border-b border-gray-400' value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} ></input>
                </div>

                {/* Update Item */}
                <div className='flex flex-col mt-2  text-sm'>
                  <label className='mb-2'>Address</label>
                  <input type='text' placeholder='Ho Chi Minh city' className='w-60 h-8 border-b border-gray-400' value={address} onChange={event => setAddress(event.target.value)}></input>
                </div>
              </div>
              {/* Right */}
              <div className='flex flex-col justify-between'>
                {/* User update upload */}
                {/* <div className='flex items-center'>
                  <img alt='' src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' className='w-24 h-24 rounded-lg object-cover mr-5' />
                  <label htmlFor='file'><MdPublish className='text-2xl cursor-pointer' /></label>
                  <input type='file' id='file' style={{ display: "none" }} />
                </div> */}
                {/* User update button */}
                <button onClick={handleUpdate} className='rounded-md p-1 cursor-pointer bg-blue-700 hover:bg-blue-600 text-white font-semibold'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}

export default User
