import React, { useState, useEffect } from 'react'
import CloseButton from 'react-bootstrap/CloseButton'
import { withRouter, Link } from 'react-router-dom'

// import ProductAccordion from '../components/ProductAccordion'
import './LuCartConfirmPage.scss'

function ConfirmPage(props) {
  // 加入購物車的產品
  const [products, setProducts] = useState([])
  const [mycart, setMycart] = useState([])

  // didMount 讀 localStorage
  useEffect(() => {
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    setProducts(myCart)
  }, [])
  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (
    item,
    isAdded = true
  ) => {
    console.log(item, isAdded)
    const currentCart =
      JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex(
      (v) => v.id === item.id
    )

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded
        ? currentCart[index].amount++
        : currentCart[index].amount--
    }

    localStorage.setItem(
      'cart',
      JSON.stringify(currentCart)
    )

    // 設定資料
    setMycart(currentCart)
  }
  const sum = (item) => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
      total += item[i].amount * item[i].price
    }
    return total
  }

  return (
    <>
      {/* banner區 */}
      <div className="container main-contant py-5">
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
        {/* 商品確認區 */}
        <div className="row py-5 ProductConfirmArea">
          <div className="col-md-12">
            <div className="card">
              <div
                className="card-header text-center"
                id="headingOne"
              >
                <button className="btn btn-link">
                  顯示購物車細節
                  <br />
                  合計:
                  <br />
                  購物車()
                </button>
              </div>
              <div>
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
                      <td className="left ProductItemDetail">
                        <img
                          src="../images/BlogPic2_150x150.jpg"
                          alt=""
                          width="80px"
                          height="80px"
                        />
                        <h5>
                          {products.map((v, i) => {
                            return (
                              <div key={i}>{v.name}</div>
                            )
                          })}
                        </h5>
                      </td>
                      <td className="align-middle"></td>
                      <td className="align-middle">
                        {products.map((v, i) => {
                          return (
                            <div key={i}>{v.price}</div>
                          )
                        })}
                      </td>
                      <td className="align-middle">
                        <ul className=" row list-group px-0">
                          {products.map((item, index) => {
                            return (
                              <li
                                className="list-group-item"
                                key={item.id}
                              >
                                <button
                                  onClick={() => {
                                    if (item.amount === 1)
                                      return
                                    updateCartToLocalStorage(
                                      item,
                                      false
                                    )
                                  }}
                                >
                                  -
                                </button>
                                {item.amount}
                                <button
                                  onClick={() =>
                                    updateCartToLocalStorage(
                                      item,
                                      true
                                    )
                                  }
                                >
                                  +
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                      </td>
                      <td className="align-middle">
                        {products.map((item, index) => {
                          return (
                            <div key={item.id}>
                              {item.price * item.amount}
                            </div>
                          )
                        })}
                      </td>
                      <td className="align-middle">
                        <CloseButton />
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
                        <strong>$50</strong>
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
                        <strong>${sum(products)}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* 資料輸入區 */}
        <div class="row DataInputArea mx-0">
          <div class="card col-md-5 px-0">
            <div class="card-header">顧客資料</div>
            <div class="card-body">
              <form
                class="needs-validation mt-3"
                novalidate
              >
                <div class="form">
                  <div class="form-group">
                    <label for="name">顧客姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="顧客姓名"
                      required
                    />
                    <div class="invalid-feedback">
                      請輸入姓名
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail">電子郵件</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      required
                    />
                    <div class="invalid-feedback">
                      請輸入信箱
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail">電話號碼</label>
                    <input
                      type="phone"
                      class="form-control"
                      id="inputPhone"
                      placeholder="phone"
                      required
                    />
                    <div class="invalid-feedback">
                      請輸入電話號碼
                    </div>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      class="form-check-label"
                      for="inlineCheckbox1"
                    >
                      使用已存會員資料
                    </label>
                  </div>
                  <div class="mb-3 mt-3">
                    <label for="Textarea">訂單備註</label>
                    <textarea
                      class="form-control"
                      id="Textarea"
                      placeholder="最多50字"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card col-md-5 px-0">
            <div class="card-header">
              <div class="">送貨資訊</div>
            </div>
            <div class="card-body">
              <form
                class="needs-validation mt-3"
                novalidate
              >
                <div class="form">
                  <div>
                    <div>已選擇的送貨方式: 宅配</div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label
                        class="form-check-label"
                        for="inlineCheckbox1"
                      >
                        使用已存會員資料
                      </label>
                    </div>
                  </div>
                  <div class="form-group col-md-6 mt-3">
                    <label for="name">收件人姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="姓名"
                      required
                    />
                    <div class="invalid-feedback">
                      請輸入姓名
                    </div>
                  </div>
                  <div class="form-group col-md">
                    <label for="inputEmail">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      required
                    />
                    <div class="invalid-feedback">
                      請輸入信箱
                    </div>
                  </div>
                </div>
                <div class="form">
                  <div class="form-group col-md-12">
                    <label for="inputCity">地址</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      required
                    />
                    <div class="invalid-feedback">
                      請輸入寄送地址
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* 信用卡區 */}
        <div class="card mt-3 CreditcardInputArea">
          <div class="card-header">
            <div class="">
              <h5 class="card-title text-center">
                信用卡資料
              </h5>
            </div>
          </div>
          <div class="mt-3">
            <form class="CreditCardForm">
              <div class="form-row">
                <div class="col">
                  <h6>持卡人姓名</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="持卡人姓名"
                  />
                </div>
                <div class="col">
                  <h6>卡號</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="卡號"
                  />
                </div>
              </div>
              <div class="form-row mt-3 input-group">
                <div class="col">
                  <h6>有效日期</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="有效日期"
                  />
                </div>
                <div class="col">
                  <h6>安全碼</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="安全碼"
                  />
                </div>
              </div>
              <div class="mt-3">
                本網站採用喬睿科技TapPay
                SSL交易傳輸系統，該系統通過PCI-DSS國際信用卡組織VISA、MasterCard等產業資料安全Level
                1等級，完善保護您的付款傳輸資料。
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label
                  class="form-check-label"
                  for="inlineCheckbox1"
                >
                  我同意網站服務條款及隱私政策
                </label>
              </div>
              <div class="text-center mt-3">
                <a href="/" class="btn btn-outline-warning">
                  送出訂單
                </a>
              </div>

              <h6 class="mt-3">
                【注意事項，下單前請務必詳閱】
                <br />
                ※ 發票注意事項
                統編發票皆為電子發票，皆會寄至您當初留的email，信件中會有一附帶的PDF檔，可自行印出即可。
                <br />
                ※ 由於商品大小尺寸一同販售，
                請在下單前先務必確認您訂購的機型尺寸顏色正確再完成結帳付款的動作。
                <br />
                ※ 如需取消訂單
                請於訂單通知已確認前提出，包裹寄出後如有多次未取紀錄我方將保留相關出貨決定權且不另行通知。
                請愛護自身權益。
                <br />
                ※ 訂單相關進度及售後等問題 可加入 FB:
                MaoPlanet，客服人員將於服務時間內盡快依序回覆，客服人員將於服務時間內盡快依序回覆。在線回覆時間：週一至週五
                (10:30~18:00)，例假日暫停出貨及客服
                <br />※
                如商品有缺貨或停產等訂單無法出貨之情況，
                我們將使用Email進行通知，請務必留意相關訊息，謝謝您，祝您購物愉快！
              </h6>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ConfirmPage)
