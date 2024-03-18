import React from 'react'

const Products = ({ products }) => {
  return (
    <>
      {/* Latest products */}
      <section>
        <div className='row gap-3'>
          {products?.map((product, index) => {
            return (
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
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Products