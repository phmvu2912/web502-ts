import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../admin/HeaderAdmin'
import Side_bar from '../admin/Side_bar'

const LayoutAdmin = () => {
  return (
    <>
      <HeaderAdmin />
      <div className='container'>
        <main>
          <section className='d-flex align-items-start justify-content-between gap-3'>
            <div>
              <Side_bar />
            </div>

            <div className='flex-grow-1 my-3'>
              <Outlet />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default LayoutAdmin
