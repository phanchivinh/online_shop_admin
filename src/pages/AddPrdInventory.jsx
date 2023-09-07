import React, { useState } from 'react'
import { apiColors, apiPrdInventory, apiSizes, fakeProduct } from '../mockData'
import { formatVND } from '../helpers'
import { useParams } from 'react-router-dom'

const AddPrdInventory = () => {
  const [product, setProduct] = useState(fakeProduct.data.product)
  const [inventInfos, setInventInfos] = useState(apiPrdInventory.data.product_inventories)

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(-1)
  const [amount, setAmount] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")

  const { id } = useParams()
  const sizes = apiSizes.data.sizes
  const colors = apiColors.data.categories


  // const handleCheckboxChange = (filterType, value) => {
  //   setFilters(prevFilters => {
  //     const newFilters = { ...prevFilters };

  //     if (newFilters[filterType].includes(value)) {
  //       newFilters[filterType] = newFilters[filterType].filter(item => item !== value)
  //     } else {
  //       newFilters[filterType].push(value)
  //     }
  //     return newFilters
  //   })
  // }

  const handleAddInventory = async () => {
    if (!selectedSize) {
      setErrorMessage("Vui lòng chọn size muôn thêm vào")
      return
    }
    if (selectedColor === -1) {
      setErrorMessage("Vui lòng chọn màu muôn thêm vào")
      return
    }
    if (amount === 0) {
      setErrorMessage("Vui lòng nhập số lượng")
      return
    }
  }

  return (
    <div className='flex-[4]'>
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
        {/* -------------------------Inventory Info------------------------------ */}
        <div className='mt-4 text-sm p-2'>
          {
            inventInfos.length > 0 && inventInfos.map((info, index) => (
              <div className=' hover:bg-gray-200 mb-2 flex justify-between p-2 rounded-md' key={`invent-info-${index}`}>
                <div>
                  <label className='mr-2 font-semibold'>Size:</label>
                  <span>{info.size_name}</span>
                </div>
                <div>
                  <label className='mr-2 font-semibold'>Màu:</label>
                  <span>{info.color_name}</span>
                </div>
                <div>
                  <label className='mr-2 font-semibold'>Số lượng:</label>
                  <span>{info.stock_amount}</span>
                </div>
              </div>
            ))
          }
        </div>
        <div>

        </div>
      </div>
      {/* --------------------------Product Inventory----------------------------- */}
      <div className='flex-1 p-5 m-5 shadow-lg shadow-blue-500'>
        {
          errorMessage && <p className='text-red-500 font-semibold'>{errorMessage}</p>
        }
        <div className="addProductItem mt-2 flex flex-col">
          <label className='font-bold mb-2' aria-required>Size: </label>
          {/* Size */}
          <div className='flex flex-wrap'>
            {
              sizes.map(item => (
                <div className='mr-4' key={`size-${item.size_id}`}>
                  <input type='radio' name='size' id={item.size_id} value={item.size_id} onChange={(event) => setSelectedSize(event.target.value)} />
                  <label className='ml-2 text-sm md:text-base' htmlFor={item.size_id}>{item.size_name}</label>
                </div>
              ))
            }
          </div>
          {/* Colors */}
          <div className="addProductItem mt-2 flex flex-col">
            <label className='font-bold mb-2'>Màu: </label>
            <div className='flex flex-wrap'>
              {
                colors.map(item => (
                  <div className='mr-4' key={`size-${item.color_id}`}>
                    <input type='radio' name='color' id={item.color_id} value={item.color_id} onChange={(event) => setSelectedColor(event.target.value)} />
                    <label className='ml-2 text-sm md:text-base' htmlFor={item.color_id}>{item.color_name}</label>
                  </div>
                ))
              }
            </div>
          </div>
          {/* Amount */}
          <div className="addProductItem mt-2 flex">
            <label className='font-bold mb-2 mr-2'>Số lượng: </label>
            <input type='number' className='border border-black p-1 w-24' value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className="addProductItem mt-2 flex justify-end">
            <button className='bg-blue-500 hover:opacity-70 p-1 text-white rounded-md' onClick={handleAddInventory}>Add Inventory</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPrdInventory
