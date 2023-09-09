import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../mockData';
import { publicRequest } from '../requestMethods';
import MessagePopup from '../components/MessagePopup/MessagePopup';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const accessToken = useSelector(state => state.auth.accessToken)

  const handleDelete = async (id) => {
    try {
      const res = await publicRequest.post('/v1/management/products/delete', {
        product_id: id
      }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(res => res.data)
      if (res.success) {
        navigate("/products")
      }

    } catch (error) {
      console.log(error)
    }
    // setData(data.filter((item) => item.id !== id))
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await publicRequest.get('/v1/management/products/', {
          headers: { Authorization: `Bearer ${accessToken}` }
        }).then(res => res.data)
        // const response = allProducts
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  const columns = [
    { field: "product_id", headerName: "ID", width: 90 },
    {
      field: "product_name",
      headerName: "Sản phẩm",
      width: 200,
      renderCell: (params) => {
        return (
          // Product list
          <div className="flex items-center">
            {/* Product list img */}
            <img className="w-8 h-8 rounded-full object-cover mr-2" src={params.row.product_image} alt="" />
            {params.row.product_name}
          </div>
        )
      },
    },
    {
      field: "product_cost_price",
      headerName: "Chi phí",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            {params.row.product_cost_price.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              useGrouping: true,
            })}
          </div>
        )
      }
    },
    {
      field: "product_price",
      headerName: "Giá bán",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            {params.row.product_price.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              useGrouping: true,
            })}
          </div>
        )
      }
    },
    {
      field: "action",
      headerName: "Thao tác",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* Product list edit */}
            <button className='rounded-lg py-1 px-2 bg-green-500 text-white cursor-pointer mr-5' onClick={() => navigate("/product/" + params.row.product_id)}>Edit</button>
            <AiOutlineDelete className='text-red-600 text-xl cursor-pointer' onClick={() => handleDelete(params.row.product_id)} />
          </>
        )
      }
    },
  ]
  return (
    <div className='flex-[4]'>
      <div className='mb-2 flex justify-end'>
        <button className='bg-blue-500 text-white p-2 rounded-lg hover:opacity-70' onClick={() => navigate("/newProduct")}>Thêm sản phẩm mới</button>
      </div>
      <DataGrid
        rows={products}
        // disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.product_id}
        autoPageSize
      // pageSize={10}
      // checkboxSelection
      />
    </div>
  )
}

export default ProductList
