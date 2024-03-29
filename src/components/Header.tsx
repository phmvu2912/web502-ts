import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='bg-secondary d-flex justify-content-between align-items-center'>
        <div className='container'>
          <div className='links'>
            <ul className='d-flex justify-content-end gap-3 my-2'>
              <li><NavLink to={'/'} className='link'>Trang chủ</NavLink></li>
              <li><NavLink to={'products'} className='link'>Sản phâm</NavLink></li>
              <li><NavLink to={'contact'} className='link'>Liên hệ</NavLink></li>
              <li><NavLink to={'signin'} className='link'>Đăng nhập</NavLink></li>
              <li><NavLink to={'signup'} className='link'>Đăng ký</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <header className='py-4 bg-light border border-dark border-start-0 '>
        <div className='container'>
          <div className='header d-flex justify-content-between align-items-center '>
            <div className='logo'>
              <b className='fs-3'>Store 24h</b>
            </div>

            <div className='form-header '>
              <form className='col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto' role='search'>
                <input type='search' className='form-control' placeholder='Search...' aria-label='Search' />
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header