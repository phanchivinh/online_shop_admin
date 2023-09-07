import React from 'react'
import { formatVND } from '../helpers'
import { format } from 'date-fns'

const OrderProducts = ({ products }) => {
  return (
    <div>
      {
        products.map((item, index) => (
          <div key={`order-product-${index}`} className='flex h-44 mb-2 hover:bg-gray-100'>
            <div className='flex-1 mr-2 rounded-lg overflow-hidden'>
              <img alt="" className='h-auto w-full object-contain' src={item.product_image} />
            </div>

            <div className='flex-[6] flex flex-col justify-around'>
              {/* Product info */}
              <div>
                <label className='font-semibold mr-2'>Tên sản phẩm:</label>
                <span>{item.product_name}</span>
              </div>
              {/* Product info */}
              <div>
                <label className='font-semibold mr-2'>Size:</label>
                <span>{item.product_size_name}</span>
              </div>
              {/* Product info */}
              <div>
                <label className='font-semibold mr-2'>Màu:</label>
                <span>{item.product_color_name}</span>
              </div>
              {/* Product info */}
              <div>
                <label className='font-semibold mr-2'>Giá bán sản phẩm:</label>
                <span>{item.product_price}</span>
              </div>
              {/* Product info */}
              <div>
                <label className='font-semibold mr-2'>Giá giảm còn:</label>
                {
                  item.product_discount_price > 0 ? <span>{formatVND(item.product_discount_price)}</span> : <span>Không có</span>
                }
              </div>
            </div>

            <div className='flex-1 flex flex-col justify-center'>
              {/* {
              item.product_discount_price > 0
              ? (<div>{formatVND(item.product_discount_price)}</div>)
              : (<div>formatVND(item.product_discount_price)</div>)
            } */}
              <div className='text-red-500'>{item.product_discount_price > 0 ? formatVND(item.product_discount_price) : formatVND(item.product_price)}</div>
              <div>x {item.product_order_quantity}</div>
              <div className='border border-black w-16'></div>
              <div className='text-green-500'>{formatVND(item.product_total_price)}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default OrderProducts
