import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import '../Done.css'

function Done(props) {
  // const { auth } = props

  // if (!auth) return <Redirect to="/login" />

  //   if (!auth)
  //     return (
  //       <Redirect>
  //         你沒登入，請連到<Link to="/login">登入頁面</Link>
  //       </Redirect>
  //     )

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Mao Planet
        </a>
      </nav>
      <div className="container main-contant py-5">
        <div className="mt-3">
          <div className="col-mb-12">
            <div className="card">
              <div className="card-header text-center bg-warning">
                訂單成立
              </div>
              <div className="card-body mx-auto">
                <div className="list-unstyled">
                  <li>已收到您的訂單</li>
                  <li>訂單編號</li>
                  <li>商品預計於2021/09/05開始配送</li>
                  <li>
                    十分感謝您的訂購，敬請耐心等候商品到貨
                  </li>
                </div>
              </div>
              <div className="text-center mb-5">
                <a
                  href="#"
                  className="btn mx-auto backtoshop"
                >
                  前往我的訂單
                </a>
                <a
                  href="#"
                  className="btn mx-auto backtotoppage"
                >
                  返回首頁
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Done)
