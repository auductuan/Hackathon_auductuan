import React from 'react'
import { products } from '../database/data'
export default function page() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex">
        {/* Table */}
        <div className="w-2/3">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">STT</th>
                <th className="border border-gray-300 px-4 py-2">Tên sản phẩm</th>
                <th className="border border-gray-300 px-4 py-2">Hình ảnh</th>
                <th className="border border-gray-300 px-4 py-2">Giá</th>
                <th className="border border-gray-300 px-4 py-2">Số lượng</th>
                <th className="border border-gray-300 px-4 py-2">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product:any, index:any) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img src={product.image} alt={product.productName} className="h-28 w-26 object-cover" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{product.price} VNĐ</td>
                  <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-gray-200 text-black px-4 py-1 mr-2 rounded">Sửa</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded">Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Form thêm sản phẩm */}
        <div className="w-1/3 ml-4 p-4 border border-gray-300">
          <h2 className="text-lg font-bold mb-4">Thêm mới sản phẩm</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2">Tên</label>
              <input type="text" className="border border-gray-300 p-2 w-full" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Hình ảnh</label>
              <input type="text" className="border border-gray-300 p-2 w-full" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Giá</label>
              <input type="text" className="border border-gray-300 p-2 w-full" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Số lượng</label>
              <input type="number" className="border border-gray-300 p-2 w-full" defaultValue="1" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">Thêm</button>
          </form>
        </div>
      </div>
    </div>
  )
}
