import React from 'react'
import { Link } from 'react-router-dom'

const Side_bar = () => {
  return (
    <>
      <aside style={{ height: `100vh` }}>
        <div className='links'>
          <ul className='my-3'>
            <li><Link to={'/admin'} className='link'>Trang chủ</Link></li>
            <li><Link to={'/admin/products'} className='link'>Quản lý sản phẩm</Link></li>
            <li><Link to={'#'} className='link'>Quản lý tài khoản</Link></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className=''>
          <ul>
            <li><Link to={'#'}>Đằng xuất</Link></li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Side_bar