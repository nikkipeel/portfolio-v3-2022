import React from 'react';
import PropTypes from "prop-types"
import NavMenu from "../components/menu"
import Footer from "./footer"
import ScrollToTop from "./scrollToTop";
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <NavMenu id="top"></NavMenu>
      <main>{children}</main>
      <ScrollToTop showBelow={250}></ScrollToTop>
      <Footer></Footer>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout