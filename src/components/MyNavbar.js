import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {
  BiSearch,
  BiUser,
  BiHeart,
  BiHomeAlt,
  BiCartAlt,
} from 'react-icons/bi'
import logo from '../images/logo.svg'
import '../Styles/MyNavbar.scss'

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  // const { auth } = props
  return (
    <>
      <div className="topYellow">
        <p></p>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        // variant="dark"
        fixed="top"
        className="container-fluid navCSS px-md-5"
      >
        <Navbar.Brand href="/home">
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top mr-md-5"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link
              as={NavLink}
              to="/adoptlist"
              className="navtext mr-md-3"
            >
              毛孩找家
            </Nav.Link>
            <NavDropdown
              title="毛孩雜貨"
              id="collasible-nav-dropdown"
              className="navtext mr-md-2"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/productlist/dog"
                className="navtext"
              >
                狗狗館
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/productlist/cat"
                className="navtext"
              >
                貓貓館
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={NavLink}
              to="/hotellist"
              className="navtext mr-md-3"
            >
              毛孩假期
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/bloglist"
              className="navtext mr-md-3"
            >
              鏟屎官大補帖
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              className="navtext d-flex d-block d-md-none"
            >
              會員登入
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              className="navtext d-flex d-block d-md-none"
            >
              新用戶註冊
            </Nav.Link>
            <NavDropdown
              title="購物群組(暫時)"
              id="collasible-nav-dropdown"
              className="navtext mr-md-2"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/Shoplist"
                className="navtext"
              >
                商品頁
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/emptycart"
                className="navtext"
              >
                空購物車
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/done"
                className="navtext"
              >
                訂單成立
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/myorder"
                className="navtext"
              >
                我的訂單
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/orderdetail"
                className="navtext"
              >
                訂單明細
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/shoppingcart"
                className="navtext"
              >
                購物車
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/confirmpage"
                className="navtext"
              >
                購物車II
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/cart"
                className="navtext"
              >
                購物車III
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="mb-4 d-flex d-none d-md-row-block px-md-2">
            <Nav.Link href="#/" className="navicon">
              <BiSearch />
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/member"
              className="navicon"
            >
              <BiUser />
            </Nav.Link>
            <Nav.Link href="#/" className="navicon">
              <BiHeart />
            </Nav.Link>
            <Nav.Link href="#/" className="navicon">
              <BiHomeAlt />
            </Nav.Link>
            <Nav.Link href="#/" className="navicon">
              <BiCartAlt />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
