import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Chart from '../components/Chart'
import { productData } from '../dummyData'
import { MdPublish } from 'react-icons/md'
import { publicRequest } from '../requestMethods'
import { useSelector } from 'react-redux'
import { fakeProduct } from '../mockData'
import { formatVND } from '../helpers'

const Product = () => {
  const [product, setProduct] = useState({})
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const accessToken = useSelector(state => state.auth.accessToken)

  //Form Input's States
  const [name, setName] = useState("")
  const [cost, setCost] = useState("")
  const [price, setPrice] = useState("")
  const [salePrice, setSalePrice] = useState("")

  useEffect(() => {
    const getProduct = async () => {
      try {
        // const response = await publicRequest.get(`/v1/management/products/${id}`, {
        //   headers: { Authorization: `Bearer ${accessToken}` }
        // })
        const response = fakeProduct
        const productDetail = JSON.parse(JSON.stringify(response.data.product))
        setProduct(response.data.product)
        //Inputs
        setName(productDetail.product_name)
        setCost(productDetail.product_cost_price)
        setPrice(productDetail.product_price)
        setSalePrice(productDetail.product_discount_price)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [])

  return (
    <div className='flex-[4] p-5'>
      {/* Product Title Container */}
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Sản phẩm</h1>
        {/* Add btn */}
        <Link to="/newProduct">
          <button className='w-20 p-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg cursor-pointer'>Tạo mới</button>
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
              <img className='w-10 h-10 rounded-full object-cover mr-5' alt="" src={product.product_image} />
              {/* Product Name */}
              <span className='font-semibold'>{product.product_name}</span>
            </div>
            {/* Info Bottom */}
            <div className='mt-2'>
              {/* Product info item */}
              <div className='flex justify-between'>
                {/* Info Key */}
                <span>Id:</span>
                {/* Info Key Value */}
                <span className='font-light'>{product.product_id}</span>
              </div>
              {/* Product info item */}
              <div className='flex justify-between'>
                {/* Info Key */}
                <span>Chi phí:</span>
                {/* Info Key Value */}
                <span className='font-light'>{formatVND(product.product_cost_price)}</span>
              </div>
              {/* Product info item */}
              <div className='flex justify-between'>
                {/* Info Key */}
                <span>Giá bán:</span>
                {/* Info Key Value */}
                <span className='font-light'>{formatVND(product.product_price)}</span>
              </div>
              {/* Product info item */}
              <div className='flex justify-between'>
                {/* Info Key */}
                <span>Giá sale:</span>
                {/* Info Key Value */}
                <span className='font-light'>{formatVND(product.product_discount_price)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Bottom */}
      <div className='p-5 m-5 shadow-lg shadow-blue-500'>
        <form className='flex flex-col justify-between'>
          {/* Product Form Left */}
          <div className='w-full flex flex-col'>
            <label className='mb-2 text-gray-400'>Tên sản phẩm: </label>
            <input className='mb-2 p-1 border-b border-b-gray-500' type='text' value={name} placeholder='Product Name' onChange={(event) => setName(event.target.value)} />
            <label className='mb-2 text-gray-400'>Chi phí sản phẩm: </label>
            <input className='mb-2 p-1 border-b border-b-gray-500 w-40' type='text' value={cost} placeholder='' onChange={(event) => setCost(event.target.value)} />
            <label className='mb-2 text-gray-400'>Giá bán: </label>
            <input className='mb-2 p-1 border-b border-b-gray-500 w-40' type='text' value={price} placeholder='' onChange={(event) => setPrice(event.target.value)} />
            <label className='mb-2 text-gray-400'>Giá Sale: </label>
            <input className='mb-2 p-1 border-b border-b-gray-500 w-40' type='text' value={salePrice} placeholder='' onChange={(event) => setSalePrice(event.target.value)} />
          </div>
          {/* Product Form Right */}
          <div className='flex flex-col justify-around'>
            {/* <div className='flex items-center'>
              <img className='w-24 h-24 rounded-lg object-cover mr-5' alt='' src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
              <label htmlFor="file"><MdPublish className='text-3xl' /></label>
              <input type='file' id='file' style={{ display: "none" }} />
            </div> */}
            <button className='p-2 mt-4 w-40 rounded-lg bg-blue-700 hover:bg-blue-600 text-white cursor-pointer font-semibold'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
