import React, { useEffect, useState } from 'react'
import { MdVisibility } from 'react-icons/md'
import { publicRequest } from '../requestMethods'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const WidgetSm = () => {
  const [users, setUsers] = useState([])
  const accessToken = useSelector(state => state.auth.accessToken)
  const navigate = useNavigate()

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await publicRequest.get('/v1/management/users/', {
          headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => res.data)
        const sortedUsers = response.data.users.sort((user1, user2) => {
          const date1 = new Date(user1.create_date_time);
          const date2 = new Date(user2.create_date_time);

          // Compare the dates in descending order
          return date2 - date1;
        })
        setUsers(sortedUsers.slice(0, 5))
      } catch (error) {
        console.error(error)
      }
    }

    getUsers()
  }, [])

  return (
    <div className='flex-1 p-5 mr-5 shadow-lg shadow-blue-500'>
      {/* Widget Small Title */}
      <span className='text-xl text-blue-700 font-semibold mb-2'>Khách hàng mới</span>
      {/* Widget Small List */}
      <ul className='m-0 p-0'>
        {
          users.map((user, index) => (
            <li key={`home-user-${index}`} className='flex items-center justify-between mx-5 my-2'>
              {/* Widget Small User */}
              <div className='flex flex-col'>
                {/* Widget Small Username */}
                <span className='font-semibold'>{`${user.last_name} ${user.first_name}`}</span>
                {/* Widget Small User Title */}
                <span className='font-light text-sm'>{user.email}</span>
              </div>
              <button className='flex items-center text-sm rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer hover:bg-blue-200' onClick={() => navigate(`/user/${user.id}`)}>
                <MdVisibility className='text-base mr-1' />
                Display
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default WidgetSm
