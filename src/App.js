// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import ProductCategory from './pages/ProductCategory'

import Done from './pages/Done'
import EmptyCart from './pages/EmptyCart'
import MyOrder from './pages/MyOrder'
import FailPage from './pages/FailPage'
import OrderDetail from './pages/OrderDetail'
import ShopList from './pages/ShopList'
import ShoppingCart from './pages/ShoppingCart'
import ProductList from './pages/ProductList'
// import Cart from './pages/Cart'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
//import BreadCrumb from './components/BreadCrumb'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar auth={auth} />
        {/* 主內容區 */}
        <MainContent>
          <MultiLevelBreadCrumb />
          {/* 匹配路由表(路徑單一匹配) */}
          {/* 切換顯示的元件畫面放在這下面 */}
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
            <Switch>
              <Route path="/done">
                <Done />
              </Route>
              <Route path="/EmptyCart">
                <EmptyCart />
              </Route>
              <Route path="/MyOrder">
                <MyOrder />
              </Route>
              <Route path="/login">
                {/* 利用props傳入頁面元件狀態 */}
                <Login auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/about">
                <About auth={auth} />
              </Route>
              <Route exact path="/">
                <Home auth={auth} />
              </Route>
              <Route path="/productcategory">
                <ProductCategory />
              </Route>
              <Route path="/FailPage">
                <FailPage auth={auth} />
              </Route>
              <Route path="/OrderDetail">
                <OrderDetail />
              </Route>
              <Route path="/ShopList">
                <ShopList />
              </Route>
              <Route path="/ShoppingCart">
                <ShoppingCart />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
              <Route path="/productlist">
                <ProductList />
              </Route>
              {/* <Route path="/cart">
                <Cart />
              </Route> */}
            </Switch>
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>
        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
