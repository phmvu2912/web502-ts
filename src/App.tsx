import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutAdmin from './components/layouts/LayoutAdmin'
import Dashboard from './pages/admin/Dashboard'
import ProductsAdmin from './pages/admin/ProductsAdmin'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LayoutWebsite from './components/layouts/LayoutWebsite'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'
import { TProducts } from './interfaces/Products'

function App() {
  const [products, setProducts] = useState<TProducts[]>([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/products`)
      // console.log(data)
      setProducts(data)
    })()
  }, [])

  // Delete
  const onHandleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`)
      alert('Xóa thành công!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Routes>
        <Route path='admin' element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<ProductsAdmin products={products} onRemove={onHandleRemove} />} />
          <Route path='products/add' element={<h1>Add product page</h1>} />
          <Route path='products/:id/edit' element={<h1>Edit product page</h1>} />
        </Route>

        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<Home products={products} />} />
          <Route path='products' element={<Products products={products} />} />
          <Route path='products/:id' element={<Detail />} />
          <Route path='about' element={<h1>About page</h1>} />
          <Route path='contact' element={<h1>Contact page</h1>} />
          <Route path='signin' element={<h1>Sign-in page</h1>} />
          <Route path='signup' element={<h1>Sign-up page</h1>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
