import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
// import '../EmptyCart.css'

function MyOrder(props) {
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
        <div className="col-mb-12">
          <div className="card">
            <div className="card-header text-center OrderTitle">
              商品資訊
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="OrderTitle">
                  <tr>
                    <th scope="col">訂單編號</th>
                    <th scope="col">下單日期</th>
                    <th scope="col">消費金額</th>
                    <th scope="col">發票號碼</th>
                    <th scope="col">狀態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">R2021090200001</th>
                    <td>2021/09/05 14:55</td>
                    <td>NT$ 5,040</td>
                    <td>QT84895503</td>
                    <td>已出貨</td>
                  </tr>
                  <tr>
                    <th scope="row">R2021090200002</th>
                    <td>2021/09/05 14:55</td>
                    <td>NT$ 5,040</td>
                    <td>QT84895503</td>
                    <td>已出貨</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav
              aria-label="Page navigation example"
              className="mx-auto"
            >
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(MyOrder)
