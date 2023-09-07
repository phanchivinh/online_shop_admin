import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { publicRequest } from '../requestMethods'

const WidgetLg = () => {
  const [orders, setOrders] = useState([])
  const accessToken = useSelector(state => state.auth.accessToken)

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
        const sortedOrders = response.data.orders.sort((order1, order2) => {
          const date1 = new Date(order1.create_date_time);
          const date2 = new Date(order2.create_date_time);

          // Compare the dates in descending order
          return date2 - date1;
        })
        setOrders(sortedOrders.slice(0, 5))
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
  }, [accessToken])

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
    <div className='flex-[2] p-5 shadow-lg shadow-blue-500'>
      <h3 className='text-xl text-blue-700 font-semibold mb-2'>Giao dịch gần đây</h3>
      <table className='w-full border-spacing-6'>
        {/* Widget Large Tr */}
        <tbody>
          <tr>
            {/* W large Th */}
            <th className='text-left'>Order ID</th>
            <th className='text-left'>Ngày</th>
            <th className='text-left'>Số tiền</th>
            <th className='text-left'>Trạng thái</th>
          </tr>
          {
            orders.map((order, index) => (
              <tr key={`home-order-${index}`}>
                {/* widget large user */}
                <td className='flex items-center font-semibold my-2'>
                  {/*Order ID*/}
                  <span>{order.order_id}</span>
                </td>
                {/* Date */}
                <td className='font-light'>{order.create_date}</td>
                {/* Amount */}
                <td className='font-light'>{order.order_total_price}</td>
                {/* Status */}
                <td><Button type={order.order_status_name} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg
