import React from 'react'

const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={`py-1 px-2 rounded-lg
    ${type === 'Approved' && 'bg-[#e5faf2] text-[#3bb077]'}
    ${type === 'Declined' && 'bg-[#fff0f1] text-[#d95087]'}
    ${type === 'Pending' && 'bg-[#ebf1fe] text-[#2a7ade]'}
    `}>{type}</button>
  }
  return (
    <div className='flex-[2] p-5 shadow-lg shadow-blue-500'>
      <h3 className='text-xl font-semibold'>Latest transactions</h3>
      <table className='w-full border-spacing-6'>
        {/* Widget Large Tr */}
        <tr>
          {/* W large Th */}
          <th className='text-left'>Customer</th>
          <th className='text-left'>Date</th>
          <th className='text-left'>Amount</th>
          <th className='text-left'>Status</th>
        </tr>
        <tr>
          {/* widget large user */}
          <td className='flex items-center font-semibold my-2'>
            <img alt='' src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className='w-10 h-10 rounded-full object-cover mr-2' />
            {/* user name */}
            <span>Susan Carol</span>
          </td>
          {/* Date */}
          <td className='font-light'>8 th7 2023</td>
          {/* Amount */}
          <td className='font-light'>$122.00</td>
          {/* Status */}
          <td><Button type="Approved" /></td>
        </tr>
        <tr>
          {/* widget large user */}
          <td className='flex items-center font-semibold my-2'>
            <img alt='' src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className='w-10 h-10 rounded-full object-cover mr-2' />
            {/* user name */}
            <span>Susan Carol</span>
          </td>
          {/* Date */}
          <td className='font-light'>8 th7 2023</td>
          {/* Amount */}
          <td className='font-light'>$122.00</td>
          {/* Status */}
          <td><Button type="Declined" /></td>
        </tr>
        <tr>
          {/* widget large user */}
          <td className='flex items-center font-semibold my-2'>
            <img alt='' src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className='w-10 h-10 rounded-full object-cover mr-2' />
            {/* user name */}
            <span>Susan Carol</span>
          </td>
          {/* Date */}
          <td className='font-light'>8 th7 2023</td>
          {/* Amount */}
          <td className='font-light'>$122.00</td>
          {/* Status */}
          <td><Button type="Pending" /></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
