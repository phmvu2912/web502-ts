import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ products }) => {
  return (
    <>
      {/* New content */}
      <section>
        <div className="group-items">
          <div className="d-flex justify-content-between align-items-center my-2">
            <h3>Sản phẩm mới nhất</h3>
            <Link to={'products'}>Xem tất cả</Link>
          </div>
          <div className='row gap-3'>
            {products?.map((product, index) => (
              <div className='col' key={index}>
                <div className='card' style={{ width: '18rem', minHeight: '320px', maxHeight: '320px' }}>
                  <img src={product.thumbnail} width={200} height={150} className='card-img-top' alt={product.title} />
                  <div className='card-body d-flex flex-column justify-content-between'>
                    <div className='card-info'>
                      <h5 className='card-title'>{product.title}</h5>
                      <p className='card-text'>{product.price} $</p>
                    </div>
                    <a href='#' className='btn btn-primary'>
                      Xem sản phẩm
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home