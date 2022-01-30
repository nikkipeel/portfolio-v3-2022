import React from 'react';
import PropTypes from "prop-types"
import NavMenu from "../components/menu"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <NavMenu></NavMenu>
      <main>{children}</main>
      <Footer></Footer>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout