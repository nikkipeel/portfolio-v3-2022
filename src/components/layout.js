import React from 'react';
import Seo from "../components/seo"
import PropTypes from "prop-types"
import Footer from "./footer"
import ScrollToTop from "./scrollToTop";
import "./layout.css"

const Layout = ({ children, title, pageTitle }) => {

  return (
    <>
    <Seo title={title} />
          <header className="bg-primary text-white">
            <h1 className="text-5xl lg:w-3/4 px-8 py-16 mx-auto">{pageTitle}</h1>
          </header>
          <main>
            <section className="dark:bg-bgPrimary bg-white w-full h-full justify-center text-dark dark:text-white md:px-8 py-4">
              <div className="w-full mx-auto">
                {children}
              </div>
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