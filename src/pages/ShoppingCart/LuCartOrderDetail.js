import React from 'react'
import { withRouter } from 'react-router-dom'
import './LuCartOrderDetail.scss'

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
      <div className="container main-contant py-5">
        {/* <!-- 購物車細節區 --> */}
        <div className="card text-center">
          <div className="card-header OrderDetailHeaderTitle">
            訂單編號. R2021090200001|訂單已完成
          </div>
        </div>
        <div className="mt-4">
          <div className="col-sm-6 mx-auto">
            <div className="card">
              <div className="card-header text-center OrderDetailHeaderTitle">
                收貨人資訊
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="CustomerName"
                      >
                        收貨人姓名
                      </th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="CustomerName"
                      >
                        配送地址
                      </th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="CustomerName"
                      >
                        取件超商
                      </th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="CustomerName"
                      >
                        連絡電話
                      </th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="CustomerName"
                      >
                        電子郵件
                      </th>
                      <td>Mark</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="col-mb-12">
            <div className="card">
              <div className="card-header text-center OrderDetailHeaderTitle">
                商品資訊
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="ProductName"
                      >
                        商品名稱
                      </th>
                      <th
                        scope="col"
                        className="ProductPriceOne"
                      >
                        單價NT$
                      </th>
                      <th
                        scope="col"
                        className="ProductQty"
                      >
                        個數
                      </th>
                      <th
                        scope="col"
                        className="ProductPriceAll"
                      >
                        總金額
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        pidan | 貓屋貓抓板 (兩色)
                      </th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(MyOrder)
