import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './LuCartFailPage.scss'

function FailPage(props) {
  const { auth } = props

  if (!auth) return <Redirect to="/login" />

  //   if (!auth)
  //     return (
  //       <Redirect>
  //         你沒登入，請連到<Link to="/login">登入頁面</Link>
  //       </Redirect>
  //     )

  return (
    <>
      <div className="container main-contant py-5">
        <div className="mt-3">
          <div className="col-mb-12">
            <div className="card">
              <div className="card-header text-center">
                訂單失敗
              </div>
              <div className="card-body mx-auto">
                <ul className="text-center list-unstyled FailNotice">
                  <li>
                    訂單編號:R2021090200001尚未完成訂購
                    <br />
                    失敗原因可能如下:
                    <br />
                    網路連線問題:請確認網路連線環境是否正常。
                    <br />
                    付款方式問題:目前選擇付款方式系統發生問題。
                    <br />
                    您也可以與客服人員聯繫重新完成訂單，十分感謝您的配合。
                  </li>
                </ul>
              </div>
              <div className="text-center row">
                <a
                  href="/"
                  className="btn mx-auto mb-4 BackToCart"
                >
                  返回購物車
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-light text-muted py-5">
        <div className="container">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              {' '}
              © Copright 2021 Mao Planet
            </li>
            <li classNameName="list-inline-item">
              <a href="/" className="text-info">
                <i classNameName="fab fa-facebook-f"></i>{' '}
                Facebook
              </a>
            </li>
            <li classNameName="list-inline-item">
              <a href="/" className="text-info">
                <i classNameName="fab fa-instagram"></i>{' '}
                instagram
              </a>
            </li>
            <li classNameName="list-inline-item">
              <a href="/" className="text-info">
                <i classNameName="fas fa-user-tag"></i>{' '}
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default withRouter(FailPage)
