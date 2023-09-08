import React, { useEffect, useState } from 'react'
import { apiColors, apiPrdInventory, apiSizes, fakeProduct } from '../mockData'
import { formatVND } from '../helpers'
import { useNavigate, useParams } from 'react-router-dom'
import ReactImageUploading from 'react-images-uploading'
import { publicRequest } from '../requestMethods'
import { useSelector } from 'react-redux'
import MessagePopup from '../components/MessagePopup/MessagePopup'

const AddPrdInventory = () => {
  const [product, setProduct] = useState({})
  const [inventInfos, setInventInfos] = useState([])
  const [images, setImages] = useState([])
  const navigate = useNavigate()

  const [cloundinaryUrls, setCloundinaryUrls] = useState([])
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(-1)
  const [amount, setAmount] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")

  const [addImageSuccess, setAddImageSuccess] = useState(false)
  const [addInventorySuccess, setAddInventorySuccess] = useState(false)

  const { id } = useParams()
  const sizes = apiSizes.data.sizes
  const colors = apiColors.data.categories
  const accessToken = useSelector(state => state.auth.accessToken)

  const handleImagesChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  const getInventory = async () => {
    try {
      const response = apiPrdInventory
      setInventInfos(response.data.product_inventories)
    } catch (error) {
      console.log(error)
    }
  }

  const uploadImageCloundinary = async (image) => {
    try {
      const response = await publicRequest.post('/v1/media/upload', {
        image: image.file
      }, {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' }
      }).then(res => res.data)
      if (response.success) {
        setCloundinaryUrls(prev => [...prev, response.data.product_image])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const apiPostImage = async (imageUrl, mainFlag) => {
    try {
      const response = await publicRequest.post('/v1/management/product-images/add', {
        product_id: id,
        image_url: imageUrl,
        image_main_flag: mainFlag
      }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(res => res.data)
      if (response.success) {
        console.log(response.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddImages = async () => {
    try {
      await Promise.all(images.map(async (image, index) => {
        await uploadImageCloundinary(image)
      }))
      const mainUrl = cloundinaryUrls[0]
      await apiPostImage(mainUrl, "Y")
      const remainUrls = cloundinaryUrls.slice(1)
      await Promise.all(remainUrls.map(async (url, index) => {
        await apiPostImage(url, "N")
      }))
      setAddImageSuccess(true)
    } catch (error) {
      console.log(error)
    }
  }

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
    try {
      const response = await publicRequest.post('/v1/management/products-inventory/add', {
        product_id: id,
        size_id: selectedSize,
        color_id: selectedColor,
        stock_amount: amount,
        delete_flag: "N"
      }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(res => res.data)
      if (response.success) {
        setAddInventorySuccess(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddInventorySuccess(false);
    }, 5000); // Hiển thị trong 3 giây

    return () => clearTimeout(timeout);
  }, [addInventorySuccess])

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await publicRequest.get(`/v1/management/products/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => res.data)
        if (response.success) {
          setProduct(response.data.product)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getProductDetail()
  }, [accessToken])

  return (
    <div className='flex-[4]'>
      <div className='flex justify-end'>
        <button className='bg-blue-500 p-1 text-white rounded-md hover:opacity-70 mr-6' onClick={() => navigate("/products")}>Thêm sản phẩm vào cửa hàng</button>
      </div>
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
      {/* --------------------------Images Inventory----------------------------- */}
      <div className="flex flex-col mt-4 flex-1 p-5 shadow-lg shadow-blue-500 w-full">
        <label className='font-bold mb-2'>Hình ảnh của sản phẩm</label>
        <ReactImageUploading multiple maxNumber={20} value={images} onChange={handleImagesChange} acceptType={['jpg', 'gif', 'png']} dataURLKey="data_url" >
          {
            ({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
              <div className=''>
                <div className='flex mb-2'>
                  <button className='bg-gray-600 text-white rounded-lg mr-2 p-2' style={isDragging ? { color: 'red' } : null}
                    onClick={onImageUpload}
                    {...dragProps}>Click ro Drag to add Images</button>
                  <button className='bg-red-600 text-white rounded-lg p-2' onClick={onImageRemoveAll}>Remove all images</button>
                </div>
                {imageList.map((image, index) => (
                  <div key={`product-${index}`} className='flex mb-2'>
                    <img src={image.data_url} alt="" width="100" className='mr-2' />
                    <div className='flex flex-col'>
                      <button className='bg-green-500 text-white rounded-lg mb-2 w-20 p-2' onClick={() => onImageUpdate(index)}>Update</button>
                      <button className='bg-red-500 text-white rounded-lg p-2' onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )
          }
        </ReactImageUploading>
        <div className="addProductItem mt-2 flex justify-center">
          <button className='bg-blue-500 hover:opacity-70 p-1 text-white rounded-md' onClick={handleAddImages}>Add Images</button>
        </div>
      </div>
      {
        addImageSuccess && <MessagePopup message='Thêm hình sản phẩm thành công' isSuccess={addImageSuccess} />
      }
      {
        addInventorySuccess && <MessagePopup message='Thêm options của sản phẩm thành công' isSuccess={addInventorySuccess} />
      }
    </div>
  )
}

export default AddPrdInventory
