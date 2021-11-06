import React, { useEffect } from 'react'
import { detailsProduct } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

function ProductScreen(props) {
  const dispatch = useDispatch()
  const productId = props.match.params.id
  const productDetails = useSelector(
    (state) => state.productDetails
  )
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId])
  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row">
          <div className="col-2">
            <img
              src={product.images}
              alt={product.name}
            ></img>
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>price : ${product.price}</li>
              <li>
                描述 :<p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <ul>
              <div className="card card-body">
                <section>
                  <div>
                    <div className="row">
                      <div>價錢</div>
                      <div className="price">
                        ${product.price}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">
                            有庫存
                          </span>
                        ) : (
                          <span className="error">
                            下次早點來
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn primary">
                      加入購物車
                    </button>
                  </div>
                </section>
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default withRouter(ProductScreen)
