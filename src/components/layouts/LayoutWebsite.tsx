import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const LayoutWebsite = () => {
  return (
    <>
      <Header />

      <main>
        <div className='container'>
          <Outlet />
        </div>

        {/* Services */}
        <section className='mt-5'>
          <div className='services bg-warning p-5'>
            <div className='container'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='service-item d-flex justify-content-between align-items-center gap-2'>
                  <div className='item-img'>
                    <img src='../../../public/images/icon-trophy.svg' alt='' />
                  </div>
                  <div className='item-content mt-3'>
                    <b className='fs-5'>High quality</b>
                    <p className='text-secondary'>crafted from top materials</p>
                  </div>
                </div>

                <div className='service-item d-flex justify-content-between align-items-center gap-2'>
                  <div className='item-img'>
                    <img src='../../../public/images/icon-tick.svg' alt='' />
                  </div>
                  <div className='item-content mt-3'>
                    <b className='fs-5'>Warranty Protection</b>
                    <p className='text-secondary'>Over 2 years</p>
                  </div>
                </div>

                <div className='service-item d-flex justify-content-between align-items-center gap-2'>
                  <div className='item-img'>
                    <img src='../../../public/images/icon-shipping.svg' alt='' />
                  </div>
                  <div className='item-content mt-3'>
                    <b className='fs-5'>Free Shipping</b>
                    <p className='text-secondary'>Order over 150 $</p>
                  </div>
                </div>

                <div className='service-item d-flex justify-content-between align-items-center gap-2'>
                  <div className='item-img'>
                    <img src='../../../public/images/icon-support.svg' alt='' />
                  </div>
                  <div className='item-content mt-3'>
                    <b className='fs-5'>24 / 7 Support</b>
                    <p className='text-secondary'>Dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default LayoutWebsite
