import React, { useState } from 'react'
import { apiColors, apiSizes, fakeCategories } from '../mockData'
import ReactImageUploading from 'react-images-uploading'

const NewProduct = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [costPrice, setCostPrice] = useState(0)
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [images, setImages] = useState([])
  const [filters, setFilters] = useState({
    colors: [],
    sizes: [],
  })

  const categories = fakeCategories.data.categories
  const sizes = apiSizes.data.sizes
  const colors = apiColors.data.categories

  const handleCheckboxChange = (filterType, value) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };

      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value)
      } else {
        newFilters[filterType].push(value)
      }
      return newFilters
    })
  }

  const handleImagesChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  //   {
  //     "product_name": "ÁO THUN OVERSIZED *WATER OVP*",
  //     "product_price": 550000,
  //     "product_cost_price": 250000,
  //     "product_discount_price": 0,
  //     "product_description": "100% COTTON\n320GSM\nIN LỤA THỦ CÔNG\nOVERSIZED FIT",
  //     "category_id": 14
  // }

  // const handlePriceInput = (event) => {
  //   const inputID = event.target.id
  //   const numericValue = event.target.value.replace(/[^0-9]/g, '')

  //   switch (inputID) {
  //     case 'cost':
  //       setCostPrice(numericValue)
  //       break
  //   }
  // }

  return (
    <div className='flex-[4]'>
      <h1 className='text-3xl font-semibold'>New Product</h1>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="addProductItem mt-2">
          <label className='font-bold mb-2'>Tên sản phẩm: </label>
          <input className='p-1' type="text" placeholder="T-shirt" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="addProductItem mt-2">
          <label className='font-bold mb-2'>Chi phí: </label>
          <input id='cost' type='number' className='p-2' placeholder="Chi phí sản phẩm..." value={costPrice} onChange={(event) => setCostPrice(event.target.value)} />
        </div>
        <div className="addProductItem mt-2">
          <label className='font-bold mb-2'>Giá bán: </label>
          <input className='p-2' type="text" placeholder="Giá bản sản phẩm..." value={price} onChange={(event) => setPrice(event.target.value)} />
        </div>
        <div className="addProductItem mt-2 flex flex-col">
          <label className='font-bold mb-2'>Chi tiết: </label>
          <textarea className='p-2 w-[90%]' type="text" placeholder="Mô tả chi tiết sản phẩm..." value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div className="addProductItem mt-2 flex flex-col">
          <label className='font-bold mb-2'>Loại: </label>
          <select className='w-36 p-2' autoComplete='on' onChange={event => setSelectedCategory(event.target.value)} value={selectedCategory}>
            {
              categories.map(item => (
                <option key={`option-${item.category_name}`} value={item.category_id}>{item.category_alias_name}</option>
              ))
            }
          </select>
        </div>
        <div className="addProductItem mt-2 flex flex-col">
          <label className='font-bold mb-2'>Size: </label>
          {/* Size */}
          <div className='flex flex-wrap'>
            {
              sizes.map(item => (
                <div className='mr-4' key={`size-${item.size_id}`}>
                  <input type='checkbox' name='size' id={item.size_id} value={item.size_name} checked={filters.sizes.includes(item.size_name)} onChange={() => handleCheckboxChange('sizes', item.size_name)} />
                  <label className='ml-2 text-sm md:text-base' htmlFor={item.size_name}>{item.size_name}</label>
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
                    <input type='checkbox' name='color' id={item.color_id} value={item.color_name} checked={filters.sizes.includes(item.color_name)} onChange={() => handleCheckboxChange('colors', item.color_name)} />
                    <label className='ml-2 text-sm md:text-base' htmlFor={item.color_name}>{item.color_name}</label>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="w-60 flex flex-col mt-4">
          <label className='font-bold mb-2'>Hình ảnh của sản phẩm</label>
          <ReactImageUploading multiple maxNumber={20} value={images} onChange={handleImagesChange} acceptType={['jpg', 'gif', 'png']} dataURLKey="data_url" >
            {
              ({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                <div className=''>
                  <div className='flex mb-2'>
                    <button className='bg-gray-600 text-white rounded-lg mr-2' style={isDragging ? { color: 'red' } : null}
                      onClick={onImageUpload}
                      {...dragProps}>Click ro Drag to add Images</button>
                    <button className='bg-red-600 text-white rounded-lg' onClick={onImageRemoveAll}>Remove all images</button>
                  </div>
                  {imageList.map((image, index) => (
                    <div key={`product-${index}`} className='flex mb-2'>
                      <img src={image.data_url} alt="" width="100" className='mr-2' />
                      <div className='flex flex-col'>
                        <button className='bg-green-500 text-white rounded-lg mb-2 w-20' onClick={() => onImageUpdate(index)}>Update</button>
                        <button className='bg-red-500 text-white rounded-lg' onClick={() => onImageRemove(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            }
          </ReactImageUploading>
          {/* {
            images.map((image, index) => (
              <div key={`image-${index}`}>
                <img src={image.dataURL} alt={`Image ${index}`} />
              </div>
            ))
          } */}
        </div>
        <div className='flex justify-end'>
          <button type='submit' className="my-6 mr-6 py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold cursor-pointer">Thêm sản phẩm</button>
        </div>
      </form>
    </div>
  )
}

export default NewProduct
