// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import Login from './pages/Login'
import Home from './pages/Home/Home'
import AdoptList from './pages/AdoptList'
import ProductDog from './pages/ProductDog'
import ProductCat from './pages/ProductCat'
import HotelList from './pages/HotelList'
import BlogList from './pages/BlogList/BlogList'
import Member from './pages/Member'
import NotFoundPage from './pages/NotFoundPage'

//screen用
import ProductScreen from './screens/ProductScreen'
// import HomeScreen from './screens/HomeScreen'

import LuCartDone from './pages/ShoppingCart/LuCartDone'
import LuCartEmptyCart from './pages/ShoppingCart/LuCartEmptyCart'
import LuCartMyOrder from './pages/ShoppingCart/LuCartMyOrder'
import LuCartFailPage from './pages/ShoppingCart/LuCartFailPage'
import LuCartOrderDetail from './pages/ShoppingCart/LuCartOrderDetail'
import LuCartShopList from './pages/ShoppingCart/LuCartShopList'
// import LuCartShoppingCart from './pages/ShoppingCart/LuCartShoppingCart'
import LuCartConfirmPage from './pages/ShoppingCart/LuCartConfirmPage'

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
                <LuCartDone />
              </Route>
              <Route path="/EmptyCart">
                <LuCartEmptyCart />
              </Route>
              <Route path="/MyOrder">
                <LuCartMyOrder />
              </Route>
              <Route path="/login">
                {/* 利用props傳入頁面元件狀態 */}
                <Login auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/FailPage">
                <LuCartFailPage auth={auth} />
              </Route>
              <Route path="/OrderDetail">
                <LuCartOrderDetail />
              </Route>
              <Route path="/ShopList">
                <LuCartShopList />
              </Route>
              <Route
                path="/products/:id"
                component={ProductScreen}
              ></Route>
              {/* <Route path="/ShoppingCart">
                <LuCartShoppingCart />
              </Route> */}
              <Route path="/ConfirmPage">
                <LuCartConfirmPage />
              </Route>
              <Route path="/bloglist">
                <BlogList />
              </Route>
              <Route path="/productlist/dog">
                <ProductDog />
              </Route>
              <Route path="/productlist/cat">
                <ProductCat />
              </Route>
              {/* <Route path="/cart">
                <Cart />
              </Route> */}
              <Route path="/hotellist">
                <HotelList auth={auth} />
              </Route>
              <Route path="/adoptlist">
                <AdoptList auth={auth} />
              </Route>
              <Route
                path="/home"
                // className={
                //   location.pathname === '/home'
                //     ? 'MultiLevelBreadCrumb-hidden'
                //     : 'MultiLevelBreadCrumb-show'
                // }
              >
                <Home auth={auth} />
              </Route>
              <Route path="/member">
                <Member auth={auth} />
              </Route>
              {/* <Route path="/" exact>
                <HomeScreen />
              </Route> */}
              <Route path="*">
                <NotFoundPage />
              </Route>
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
