import React, { useEffect, useState } from 'react'
import { apiOrderDetail, apiOrderStatuses } from '../mockData'
import { formatVND } from '../helpers'
import { useNavigate, useParams } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { useSelector } from 'react-redux'
import OrderProducts from '../components/OrderProducts'

const Order = () => {
  const [orderDetail, setOrderDetail] = useState({})
  const [orderStatuses, setOrderStatuses] = useState(apiOrderStatuses.data.order_statuses)
  const [orderProducts, setOrderProducts] = useState([])
  const [selectedStatus, setSelectedStatus] = useState(-1)

  const { id } = useParams()
  const accessToken = useSelector(state => state.auth.accessToken)
  const navigate = useNavigate()

  const handleUpdate = async () => {
    try {
      const response = await publicRequest.post('/v1/management/orders/update-status', {
        order_status: selectedStatus,
        order_id: id
      }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(res => res.data)
      if (response.success) {
        navigate("/orders")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getOrder = () => {
      setOrderDetail(apiOrderDetail.data.order)
      setOrderProducts(apiOrderDetail.data.order_products)
      setSelectedStatus(orderDetail.order_status_code)
    }
    getOrder()
  }, [])

  return (
    <div className='flex-[4]'>
      <div className='flex-1 p-5 m-5 shadow-lg shadow-blue-500'>
        {/* Order Info */}
        <div>
          {/* Info Top */}
          <div className='flex justify-between items-center'>
            {/* Product Name */}
            <span className='font-semibold'>Đơn hàng của {orderDetail.user_name}</span>
            {/* Product info item */}
            <div className='flex hover:bg-gray-100'>
              {/* Info Key */}
              <span>Ngày tạo:</span>
              {/* Info Key Value */}
              <span className='font-light ml-2'>{orderDetail.create_date}</span>
            </div>
          </div>
          {/* Info Bottom */}
          <div className='mt-2'>
            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Order Id:</span>
              {/* Info Key Value */}
              <span className='font-light'>{orderDetail.order_id}</span>
            </div>

            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Id khách hàng:</span>
              {/* Info Key Value */}
              <span className='font-light'>{orderDetail.user_id}</span>
            </div>
            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Email:</span>
              {/* Info Key Value */}
              <span className='font-light'>{orderDetail.user_email}</span>
            </div>
            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Địa chỉ:</span>
              {/* Info Key Value */}
              <span className='font-light'>{orderDetail.user_address}</span>
            </div>
            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Tổng hóa đơn:</span>
              {/* Info Key Value */}
              <span className='font-light'>{formatVND(orderDetail.order_total_price)}</span>
            </div>
            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Tổng hóa đơn:</span>
              {/* Info Key Value */}
              <span className='font-light'>{formatVND(orderDetail.order_total_price)}</span>
            </div>
            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Giảm giá còn:</span>
              {/* Info Key Value */}
              <span className='font-light'>{formatVND(orderDetail.order_discount_price)}</span>
            </div>
            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Phương thức thanh toán:</span>
              {/* Info Key Value */}
              <span className='font-light'>{orderDetail.payment_type_name}</span>
            </div>
            {/* Product info item */}
            <div className='flex justify-between  hover:bg-gray-100'>
              {/* Info Key */}
              <span>Trạng thái đơn hàng: </span>
              {/* Info Key Value */}
              <select
                value={selectedStatus}
                onChange={e => { console.log(typeof e.target.value); setSelectedStatus(parseInt(e.target.value)) }}
                className={`py-1 px-2
                ${(parseInt(selectedStatus) === 1 || parseInt(selectedStatus) === 3 || parseInt(selectedStatus) === 4) && 'bg-[#ebf1fe] text-[#2a7ade]'}
                ${(parseInt(selectedStatus) === 2 || parseInt(selectedStatus) === 5) && 'bg-[#e5faf2] text-[#3bb077]'}
                ${(parseInt(selectedStatus) === 6) && 'bg-[#fff0f1] text-[#d95087]'}
                `}
              >
                {
                  orderStatuses.map((status, index) => (
                    <option key={`status-${index}`} value={status.order_status_id}>
                      {status.order_status_name}
                    </option>
                  ))
                }
              </select>
            </div>
            {/* Update btn */}
            <div className='flex justify-center'>
              <button className='p-2 rounded-md bg-blue-500 text-white hover:opacity-70' onClick={handleUpdate}>Cập nhật trạng thái</button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------Order's Product---------------------------- */}
      <OrderProducts products={orderProducts} />
    </div>
  )
}

export default Order
