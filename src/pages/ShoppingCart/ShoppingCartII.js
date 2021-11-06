import React from 'react'
import { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import ShopList from './pages/ShopList'
// import ProductAccordion from '../components/ProductAccordion'
import '../Done.css'

function ShoppingCartII(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Mao Planet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="container main-contant py-5">
        <h1 className="text-center mb-3 text-secondary">
          結帳頁
        </h1>
        <div className="form-row text-center">
          <div className="col-md-4">
            <div className="row alert" role="alert">
              <div className="processtag">
                <div className="progressnum1">1</div>
              </div>
              <div>
                <div className="progresstitle">購物車</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row alert" role="alert">
              <div className="processtag2">
                <div className="progressnum2">2</div>
              </div>
              <div>
                <div className="progresstitle2">
                  填寫資料
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row alert" role="alert">
              <div className="processtag3">
                <div className="progressnum3">3</div>
              </div>
              <div>
                <div className="progresstitle3">
                  資料確認
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-12">
            <div className="card">
              <div
                className="card-header text-center"
                id="headingOne"
              >
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  顯示購物車細節
                  <br />
                  合計:
                  <br />
                  購物車(2)
                </button>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <table className="table table-sm text-center">
                  <thead>
                    <th className="text-left">商品名稱</th>
                    <th className="text-center">優惠</th>
                    <th width="80px">單件價格</th>
                    <th
                      width="100px"
                      className="text-center"
                    >
                      數量
                    </th>
                    <th
                      width="80px"
                      className="text-center"
                    >
                      小計
                    </th>
                    <th width="30px"></th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="left">
                        <img
                          src="https://images.unsplash.com/photo-1494281258937-45f28753affd?w=1350"
                          height="50px"
                        />
                        <h5>小雞PU餐墊</h5>
                      </td>
                      <td className="align-middle"></td>
                      <td className="align-middle">$520</td>
                      <td className="align-middle">1件</td>
                      <td className="align-middle">$520</td>
                      <td className="align-middle">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#removeModal"
                          data-title="金牌西裝"
                        >
                          <i className="far fa-trash-alt fa-1x text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="left">
                        <img
                          src="https://images.unsplash.com/photo-1494281258937-45f28753affd?w=1350"
                          height="50px"
                        />
                        <h5>小雞PU餐墊</h5>
                      </td>
                      <td className="align-middle"></td>
                      <td className="align-middle">$520</td>
                      <td className="align-middle">1件</td>
                      <td className="align-middle">$520</td>
                      <td className="align-middle">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#removeModal"
                          data-title="金牌西裝"
                        >
                          <i className="far fa-trash-alt fa-1x text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        colspan="4"
                        className="text-right"
                      >
                        運費
                      </td>
                      <td className="align-middle text-right">
                        <strong>$60</strong>
                      </td>
                    </tr>
                    <tr>
                      <td
                        colspan="4"
                        className="text-right"
                      >
                        合計
                      </td>
                      <td className="align-middle text-right">
                        <strong>$580</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <h5 className="card-header text-center">
                商品加購區
              </h5>
              <div className="row">
                <div className="card-body col-md-3 col-12">
                  <div className="card-title add-title">
                    PurLab | 發財麻將 (含貓薄荷)
                  </div>
                  <p className="card-text">NT$ 150</p>
                  <div className="addtocart">
                    <a href="#" className="btn addtocart">
                      加入購物車
                    </a>
                  </div>
                </div>
                <div className="card-body col-md-3 col-12">
                  <div className="card-title add-title">
                    PurLab | 發財麻將 (含貓薄荷)
                  </div>
                  <p className="card-text">NT$ 150</p>
                  <div className="addtocart">
                    <a href="#" className="btn addtocart">
                      加入購物車
                    </a>
                  </div>
                </div>
                <div className="card-body col-md-3 col-12">
                  <div className="card-title add-title">
                    PurLab | 發財麻將 (含貓薄荷)
                  </div>
                  <p className="card-text">NT$ 150</p>
                  <div className="addtocart">
                    <a href="#" className="btn addtocart">
                      加入購物車
                    </a>
                  </div>
                </div>
                <div className="card-body col-md-3 col-12">
                  <div className="card-title add-title">
                    PurLab | 發財麻將 (含貓薄荷)
                  </div>
                  <p className="card-text">NT$ 150</p>
                  <div className="addtocart">
                    <a href="#" className="btn addtocart">
                      加入購物車
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="card col-5">
                <h5 className="card-header">
                  選擇配送及付款方式
                </h5>
                <h6 className="align-self-end">
                  請注意：若為外離島宅配到府則不提供貨到付款的服務！
                </h6>
                <label for="delivery">配送方式</label>
                <select className="form-control">
                  <option>超商取貨</option>
                  <option>宅配</option>
                </select>
                <label for="payment">付款方式</label>
                <select className="form-control">
                  <option>現金</option>
                  <option>信用卡</option>
                </select>
              </div>
              <div className="card col-5">
                <h5 className="card-header">訂單資訊</h5>
                <div className="justify-content-around">
                  <td className="">小計</td>
                  <td className="">
                    <strong>$1160</strong>
                  </td>
                </div>
                <div>
                  <td className="">運費</td>
                  <td className="">
                    <strong>$60</strong>
                  </td>
                </div>
                <form className="form-inline">
                  <div className="form-group mx-sm-3 mb-2">
                    <label
                      for="inputPassword2"
                      className="sr-only"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword2"
                      placeholder="優惠券"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn mb-2 couponbtn"
                  >
                    套用
                  </button>
                </form>
                <button
                  type="button"
                  className="btn orderbtn"
                >
                  送出訂單
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ShoppingCartII)
