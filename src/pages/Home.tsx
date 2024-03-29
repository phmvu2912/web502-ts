import { Link } from 'react-router-dom'
import './Home.css'
import { TProducts } from '~/interfaces/Products'
import React from 'react'

type Props = {
  products: TProducts[]
}

const Home: React.FC<Props> = ({ products }) => {
  // console.log(products);

  const slicedProducts = products.slice(0, 8)
  // console.log(slicedProducts)

  return (
    <>
      {/* Banner */}
      <section className='mb-5 my-5'>
        <img src='../../../public/images/nike-just-do-it.png' alt='' style={{ width: '100%' }} />
      </section>
      {/* New content */}
      <section className='latestSection'>
        <div className='group-items'>
          <div className='d-flex justify-content-between align-items-center my-2'>
            <h3>Sản phẩm nổi bật</h3>
            <Link to={'products'}>Xem tất cả</Link>
          </div>
          <div className='row gap-3 items-body'>
            {slicedProducts?.map((product, index) => (
              <div className='col ' key={index}>
                <div className='card items' style={{ width: '18rem', maxHeight: '320px' }}>
                  <img src={product.thumbnail} width={200} height={150} className='card-img-top' alt={product.title} />
                  <div className='card-body d-flex flex-column justify-content-between'>
                    <div className='card-info'>
                      <h5 className='card-title'>{product.title}</h5>
                      <p className='card-text'>{product.price} $</p>
                    </div>
                    <div className='actions d-flex flex-column justify-content-between'>
                      <p>
                        <b>Mô tả:</b> {product.description}
                      </p>
                      <Link to={`products/${product.id}`} className='btn btn-primary w-100'>
                        Xem sản phẩm
                      </Link>
                    </div>
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
