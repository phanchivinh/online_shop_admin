import React, { useState } from 'react'
import { apiColors, apiSizes, fakeCategories } from '../mockData'
import ReactImageUploading from 'react-images-uploading'
import { publicRequest } from '../requestMethods'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()
  const accessToken = useSelector(state => state.auth.accessToken)
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await publicRequest.post("/v1/management/products/add", {
        product_name: name,
        product_price: price,
        product_cost_price: costPrice,
        product_discount_price: 0,
        product_description: description,
        category_id: selectedCategory
      }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(res => res.data)
      const newProductID = response.data.product_id
      if (response.success) {
        navigate(`/addInventory/${newProductID}`)
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='flex-[4]'>
      <button className='p-1 bg-lime-400 rounded-lg hover:opacity-70' onClick={() => navigate("/products")}>Quay lại</button>
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
        <div className='flex justify-end'>
          <button type='submit' className="my-6 mr-6 py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold cursor-pointer">Bước tiếp theo</button>
        </div>
      </form>
    </div>
  )
}

export default NewProduct
