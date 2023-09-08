import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../dummyData";
import { MdDeleteOutline } from 'react-icons/md'
import { apiUsers } from '../mockData';
import { useSelector } from 'react-redux';
import { publicRequest } from '../requestMethods';

const UserList = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const accessToken = useSelector(state => state.auth.accessToken)

  const handleDelete = async (id) => {
    try {
      const response = await publicRequest.post('/v1/management/users/delete', {
        id: id
      }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(res => res.data)
      if (response.success) {
        navigate(0)
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await publicRequest.get('/v1/management/users/', {
          headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => res.data)
        // const response = apiUsers
        setUsers(response.data.users)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [accessToken])

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "last_name",
      headerName: "Họ",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            {params.row.last_name}
          </div>
        );
      },
    },
    {
      field: "first_name",
      headerName: "Tên",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            {params.row.first_name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    { field: "phone_number", headerName: "Số điện thoại", width: 100 },
    { field: "address", headerName: "Địa chỉ", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button onClick={() => navigate("/user/" + params.row.id)} className="rounded-xl px-2 py-1 bg-[#3bb077] text-white cursor-pointer mr-5">Edit</button>
            <MdDeleteOutline
              className="text-red-600 cursor-pointer text-2xl"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='flex-[4]'>
      <DataGrid
        rows={users}
        // disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.id}
        autoPageSize
      // checkboxSelection
      />
    </div>
  )
}

export default UserList
