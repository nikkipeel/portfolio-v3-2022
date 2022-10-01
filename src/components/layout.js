import React from "react"
import Seo from "../components/seo"
import PropTypes from "prop-types"
import Footer from "./footer"
import ScrollToTop from "./scrollToTop"
import "./layout.css"

const Layout = ({ children, title, pageTitle }) => {
  return (
    <>
      <Seo title={title} />
      <header>
        <h1 className="mx-auto px-6 py-16 text-5xl leading-tight md:px-16">
          {pageTitle}
        </h1>
      </header>
      <main>
        <section className="h-full w-full justify-center py-4 md:px-8">
          <div className="mx-auto w-full">{children}</div>
        </section>
      </main>
      <ScrollToTop showBelow={250}></ScrollToTop>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.node.isRequired,
}

export default Layout
