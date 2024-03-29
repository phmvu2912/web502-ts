import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TProducts } from '~/interfaces/Products'

const Detail = () => {
  const [product, setProducts] = useState<TProducts | null>(null)
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products/${id}`)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      <div className='d-flex gap-3 my-5'>
        <div className='d-flex gap-3'>
          <div className='d-flex flex-column'>
            {product?.images.map((sub_img, index) => (
              <div key={index} className='mb-2'>
                <img src={product?.images[index]} width={100} />
              </div>
            ))}
          </div>
          <div className='main-img'>
            <img src={product?.thumbnail} width={700} />
          </div>
        </div>

        <div className='info w-100'>
          <h3 className='fw-bold'>{product?.title}</h3>
          <p>
            <b>Thương hiệu: </b>
            <Link to={'#'}>{product?.brand}</Link>
          </p>
          <p className='fs-3'>{product?.price} $</p>
          <p>
            <b>Đánh giá: </b>
            {product?.rating}
          </p>

          <div className='quantity mb-3'>
            <label className='fw-bold my-2'>Số lượng:</label>
            <input type='number' className='form-control text-center' style={{ maxWidth: '100px' }} />
          </div>

          <div className='btn-group d-flex gap-3 my-5'>
            <a className='btn btn-dark rounded'>Buy now</a>
            <a className='btn btn-outline-dark rounded'>Add to cart</a>
          </div>

          <hr />

          <div className='desc'>
            <b>Mô tả:</b>
            <p className='lh-base'>{product?.description}</p>
          </div>
        </div>
      </div>

      <hr className='my-5' />

      <div className='preview'>
        <div className='heading'>
          <h3 className='fw-bold '>Chi tiết sản phẩm</h3>
        </div>

        <div className='preview-body'>
          <div className='img text-center my-2'>
            <img src={product?.thumbnail} />
          </div>
          <p>{product?.detailDescription}</p>
        </div>
      </div>
    </>
  )
}

export default Detail
