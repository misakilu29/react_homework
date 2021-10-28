import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const { auth } = props
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          React-Homework
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              登入
            </Nav.Link>
            {auth && (
              <Nav.Link as={NavLink} to="/failpage">
                失敗頁
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/productcategory">
              產品分類
            </Nav.Link>
            <Nav.Link as={NavLink} to="/done">
              完成畫面
            </Nav.Link>
            <Nav.Link as={NavLink} to="/emptycart">
              空購物車
            </Nav.Link>
            <Nav.Link as={NavLink} to="/myorder">
              我的訂單
            </Nav.Link>
            <Nav.Link as={NavLink} to="/orderdetail">
              訂單明細
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shoplist">
              商品頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shoppingcart">
              購物車
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productlist">
              產品列表
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              購物車
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
