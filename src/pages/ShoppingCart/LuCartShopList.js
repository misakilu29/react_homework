import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Product from '../../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'

function ShopList() {
  const dispatch = useDispatch()
  const productList = useSelector(
    (state) => state.productList
  )
  const products = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
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
