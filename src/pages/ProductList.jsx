import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from "react-router-dom";
import { productRows } from '../dummyData'
import { AiOutlineDelete } from 'react-icons/ai'

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          // Product list
          <div className="flex items-center">
            {/* Product list img */}
            <img className="w-8 h-8 rounded-full object-cover mr-2" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      },
    },
    {
      field: "stock", headerName: "Stock", width: 200
    },
    {
      field: "status",
      headerName: "Status",
      width: 160
    },
    {
      field: "price",
      headerName: "Price",
      width: 160
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              {/* Product list edit */}
              <button className='rounded-lg py-1 px-2 bg-green-500 text-white cursor-pointer mr-5'>Edit</button>
            </Link>
            <AiOutlineDelete onClick={handleDelete} className='text-red-600 cursor-pointer' />
          </>
        )
      }
    },
  ]
  return (
    <div className='flex-[4]'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList
