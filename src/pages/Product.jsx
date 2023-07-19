import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../components/Chart'
import { productData } from '../dummyData'
import { MdPublish } from 'react-icons/md'

const Product = () => {
  return (
    <div className='flex-[4] p-5'>
      {/* Product Title Container */}
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Sản phẩm</h1>
        {/* Add btn */}
        <Link to="/newProduct">
          <button className='w-20 p-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg cursor-pointer'>Create</button>
        </Link>
      </div>
      {/* Product Top */}
      <div className='flex'>
        {/* Top Left */}
        <div className='flex-1'>
          <Chart data={productData} dataKey="Sales" title="Hiệu suất bán hàng" />
        </div>
        {/* Top Right */}
        <div className='flex-1 p-5 m-5 shadow-lg shadow-blue-500'>
          {/* Product Info */}
          <div>
            {/* Info Top */}
            <div className='flex items-center'>
              <img className='w-10 h-10 rounded-full object-cover mr-5' alt="" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              {/* Product Name */}
              <span className='font-semibold'>Váy nữ ABC</span>
            </div>
            {/* Info Bottom */}
            <div className='mt-2'>
              {/* Product info item */}
              <div className='w-36 flex justify-between'>
                {/* Info Key */}
                <span>id:</span>
                {/* Info Key Value */}
                <span className='font-light'>123</span>
              </div>
              {/* Product info item */}
              <div className='w-36 flex justify-between'>
                {/* Info Key */}
                <span>sales:</span>
                {/* Info Key Value */}
                <span className='font-light'>5123</span>
              </div>
              {/* Product info item */}
              <div className='w-36 flex justify-between'>
                {/* Info Key */}
                <span>active:</span>
                {/* Info Key Value */}
                <span className='font-light'>yes</span>
              </div>
              {/* Product info item */}
              <div className='w-36 flex justify-between'>
                {/* Info Key */}
                <span>in stock:</span>
                {/* Info Key Value */}
                <span className='font-light'>no</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Bottom */}
      <div className='p-5 m-5 shadow-lg shadow-blue-500'>
        <form className='flex justify-between'>
          {/* Product Form Left */}
          <div className='flex flex-col'>
            <label className='mb-2 text-gray-400'>Product Name</label>
            <input className='mb-2 p-1 border-b border-b-gray-500' type='text' placeholder='Product Name' />
            <label className='mb-2 text-gray-400'>In Stock</label>
            <select className='mb-2' name='inStock' id='inStock'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className='mb-2 text-gray-400'>Active</label>
            <select className='mb-2' name='active' id='active'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          {/* Product Form Right */}
          <div className='flex flex-col justify-around'>
            {/* Product Upload */}
            <div className='flex items-center'>
              <img className='w-24 h-24 rounded-lg object-cover mr-5' alt='' src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
              <label for="file"><MdPublish className='text-3xl' /></label>
              <input type='file' id='file' style={{ display: "none" }} />
            </div>
            <button className='p-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white cursor-pointer font-semibold'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
