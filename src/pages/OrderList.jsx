import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../dummyData";
import { MdDeleteOutline } from 'react-icons/md'
import { apiUsers } from '../mockData';
import { useSelector } from 'react-redux';
import { publicRequest } from '../requestMethods';


const OrderList = () => {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  const accessToken = useSelector(state => state.auth.accessToken)

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await publicRequest.post('/v1/management/orders/', {
          order_status: 0,  //get all
          order_id: null    //get all
        }, {
          headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => res.data)
        // const response = apiUsers
        setOrders(response.data.orders)
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
  }, [accessToken])

  const columns = [
    { field: "order_id", headerName: "ID", width: 50 },
    {
      field: "user_name",
      headerName: "Tên khách hàng",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            {params.row.user_name}
          </div>
        );
      },
    },
    { field: "user_email", headerName: "Email KH", width: 150 },
    { field: "user_address", headerName: "Địa chỉ", width: 200 },
    {
      field: "order_total_price",
      headerName: "Tổng giá trị đơn hàng",
      width: 150
    },
    {
      field: "order_status_name",
      headerName: "Trạng thái đơn hàng",
      width: 150,
      renderCell: (params) => {
        <>
          <Button type={params.row.order_status_name} />
        </>
      }
    },
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

  const Button = ({ type }) => {
    return <button className={`py-1 px-2 rounded-lg cursor-auto
    ${type === 'Hoàn thành' && 'bg-[#e5faf2] text-[#3bb077]'}
    ${type === 'Đã thanh toán' && 'bg-[#e5faf2] text-[#3bb077]'}
    ${type === 'Đã hủy' && 'bg-[#fff0f1] text-[#d95087]'}
    ${type === 'Đang giao' && 'bg-[#ebf1fe] text-[#2a7ade]'}
    ${type === 'Chờ thanh toán' && 'bg-[#ebf1fe] text-[#2a7ade]'}
    ${type === 'Vận chuyển' && 'bg-[#ebf1fe] text-[#2a7ade]'}
    `}>{type}</button>
  }

  return (
    <div className='flex-[4]'>
      <DataGrid
        rows={orders}
        // disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.order_id}
        autoPageSize
        checkboxSelection
      />
    </div>
  )
}

export default OrderList
