import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='bg-dark py-3'>
        <div className='container'>
          <div className='footer d-flex justify-content-between align-items-start text-light'>
            <div className='col'>
              <div className='col-heading my-2'>
                <b className='fs-3'>Store 24h</b>
              </div>
              <div className='col-items'>
                <p>Địa chỉ: Nam Từ Liêm - Hà Nội - Việt Nam</p>
              </div>
            </div>

            <div className='col'>
              <div className='col-heading my-2'>
                <b className=''>Về cửa hàng</b>
              </div>
              <div className='col-items d-flex flex-column'>
                <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>Trang chủ</Link>
                <Link to={'products'} style={{ color: 'white', textDecoration: 'none' }}>Sản phẩm</Link>
                <Link to={'contact'} style={{ color: 'white', textDecoration: 'none' }}>Liên hệ</Link>
                <Link to={'#'} style={{ color: 'white', textDecoration: 'none' }}>Tin tức</Link>
              </div>
            </div>

            <div className='col'>
              <div className='col-heading my-2'>
                <b className=''>Hỗ trợ</b>
              </div>
              <div className='col-items d-flex flex-column'>
                <Link to={'#'} style={{ color: 'white', textDecoration: 'none' }}>Hình thức thanh toán</Link>
                <Link to={'#'} style={{ color: 'white', textDecoration: 'none' }}>Chính sách đổi trả</Link>
                <Link to={'#'} style={{ color: 'white', textDecoration: 'none' }}>Chính sách quyền riêng tư</Link>
              </div>
            </div>

            <div className='col'>
              <div className='col-heading my-2'>
                <b className=''>Đăng ký nhận thông tin ưu đãi</b>
              </div>
              <div className='col-items d-flex flex-column'>
                <form>
                  <div className='form-group d-flex gap-3'>
                    <input type='text' placeholder='Nhập địa chỉ Email' className='form-control' />
                    <button type='button' className='btn btn-light btn-sm'>
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
