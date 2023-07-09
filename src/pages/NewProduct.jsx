import React from 'react'

const NewProduct = () => {
  return (
    <div className='flex-[4]'>
      <h1 className='text-3xl font-semibold'>New Product</h1>
      <form className="mt-2">
        <div className="w-60 flex flex-col mb-2">
          <label className='text-gray-400 font-semibold mb-2'>Image</label>
          <input className='p-2' type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label className='text-gray-400 font-semibold mb-2'>Name</label>
          <input className='p-2' type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label className='text-gray-400 font-semibold mb-2'>Stock</label>
          <input className='p-2' type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label className='text-gray-400 font-semibold mb-2'>Active</label>
          <select className='p-2' name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="mt-2 py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold cursor-pointer">Create</button>
      </form>
    </div>
  )
}

export default NewProduct
