import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// 子頁面區域元件
import UserOrder from './admin/user/UserOrder'
import InfoEdit from './admin/user/InfoEdit/InfoEdit'
import AddressEdit from './admin/user/AddressEdit'
import PasswordChange from './admin/user/PasswordChange/PasswordChange'
import PetId from './admin/user/PetId'
import './Member.scss'

function Member(props) {
  // 預設出現的文字元件
  const Default = () => (
    <>
      會員首頁
      <br />
      <button
        type="button"
        onClick={() => {
          logout()
          props.history.push('/home')
          window.location.reload() //強制刷新頁面
        }}
        className="btn btn-primary"
      >
        登出
      </button>
    </>
  )

  // const { auth, setAuth } = props

  // if (!auth) return <Redirect to="/login" />

  //驗證有無token
  // const token = localStorage.getItem('token')
  // if (token) {
  //   setAuth(true)
  // }

  //   if (!auth)
  //     return (
  //       <Redirect>
  //         你沒登入，請連到<Link to="/login">登入頁面</Link>
  //       </Redirect>
  //     )
  console.log(props)

  //location:內的search: "?order_id=3"可以抓到
  // const searchParams = new URLSearchParams(
  //   props.location.search
  // )
  // const order_id = searchParams.get('order_id')
  // console.log(order_id)

  // 網址參數對應頁面區塊元件
  // 屬性 = 網址上的task參數 props.match.params.task

  //會員登出
  const logout = () => {
    // clean if has line token in localstorage
    localStorage.removeItem('member')
    localStorage.removeItem('token')
    // setAuth(false)

    // UserDataService.logout().then((res) => {
    //   console.log(res.data)
    //   if (res.data.message === 'success') {
    //     setAuth(false)
    //   }
    // })
  }

  const tasks = {
    order: UserOrder,
    infoedit: InfoEdit,
    addressedit: AddressEdit,
    passwordchange: PasswordChange,
    petid: PetId,
  }

  // 動態元件jsx標記的語法
  // 自訂元件需要大寫
  const Component = props.match.params.task
    ? tasks[props.match.params.task]
    : Default

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card memberCard">
              <div className="memberBanner">
                <h2>會員訊息</h2>
              </div>
              <div className="wrap">
                <ul>
                  <li>
                    <Link to="/admin/user/infoedit">個人資料</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/petid">毛孩ID</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/order">我的訂單</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/#/">追蹤清單</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/addressedit">收貨地址</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/passwordchange">密碼修改</Link>
                  </li>
                </ul>
              </div>
            </div>
            <ul>
              <h4>毛孩認養</h4>
              <li>
                <Link to="/admin/user/#/">我的毛孩</Link>
              </li>
              <li>
                <Link to="/admin/user/#/">飼主回信</Link>
              </li>
              <h4>毛孩旅館</h4>
              <li>
                <Link to="/admin/user/#/">旅館預約</Link>
              </li>
              <li>
                <Link to="/admin/user/#/">預約更改及取消</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-9">
            {/* <h1>會員管理區</h1> */}
            <Component />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Member)
