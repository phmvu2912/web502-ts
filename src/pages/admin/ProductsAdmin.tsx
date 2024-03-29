import React from 'react'
import { Link } from 'react-router-dom'

const ProductsAdmin = ({ products, onRemove }) => {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h1>Quản lý sản phẩm</h1>
        <Link to={'/admin/products/add'}>Thêm mới sản phẩm</Link>
      </div>

      <table className='table table-striped w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className='fw-bold'>{index + 1}</td>
              <td>{product.title}</td>
              <td>
                <img src={product.thumbnail} alt={product.name} width={200} height={150} />
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <div className='d-flex justify-content-between align-items gap-2'>
                  <button className='btn btn-primary btn-sm'>Cập nhật</button>
                  <button className='btn btn-danger btn-sm' onClick={() => onRemove(product.id)}>Xóa</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProductsAdmin
