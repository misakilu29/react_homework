import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import '../EmptyCart.css'

function EmptyCart(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Mao Planet
        </a>
      </nav>
      <div className="container main-contant py-5">
        <div className="mt-3">
          <div className="col-mb-12">
            <div className="card">
              <div className="card-body">
                <ul className="text-center list-unstyled mt-3">
                  <li className="empty_notice">
                    您的購物車沒有任何商品......
                  </li>
                </ul>
              </div>
              <div className="text-center mb-5">
                <Link
                  to="/shoplist"
                  className="btn mx-auto dogshop"
                >
                  逛逛狗狗雜貨店
                </Link>
                <Link
                  to="/shoplist"
                  className="btn mx-auto catshop"
                >
                  逛逛貓貓雜貨店
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(EmptyCart)
