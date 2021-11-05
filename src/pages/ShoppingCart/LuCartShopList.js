import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Product from '../../components/Product'

function ShopList() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () =>{
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="container main-contant py-5">
        <div className="row center">
          {products.map((product) => (
            <div key={product._id} className="card">
              <Product
                key={product._id}
                product={product}
              ></Product>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default withRouter(ShopList)
