import React from 'react'
// import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineSetting } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authRedux'
import { useNavigate } from 'react-router-dom'
import { publicRequest } from '../requestMethods'

const Topbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const accessToken = useSelector(state => state.auth.accessToken)

  const onSignOut = async (event) => {
    const response = await publicRequest.post('/v1/auth/user/sign-out', {}, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    dispatch(logout())
    navigate("/login")
  }

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
            <AiOutlineSetting className='text-2xl' />
          </div>
          <button className="bg-red-700 text-white p-1 rounded-lg" onClick={onSignOut}>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
