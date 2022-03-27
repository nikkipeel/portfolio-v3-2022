import * as React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import { Link } from "gatsby"
import Seo from "../components/seo"
import NavMenu from "../components/menu"
import Layout from "../components/layout"

const ThankYouPage = ({ location, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
    return isPartiallyCurrent || isCurrent
      ? { className: "breadcrumb__link breadcrumb__link__active" }
      : {}
  }

  const customCrumbLabel = location.pathname.toLowerCase().replaceAll("/", " ")

  const customCrumbSeparator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="crumb-separator h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )
  return (
    <>
      <NavMenu></NavMenu>
      <div class="breadcrumbs md:pl-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="home-icon hidden h-6 w-6 md:flex"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator={customCrumbSeparator}
          crumbLabel={customCrumbLabel}
          getProps={isPartiallyActive}
        />
      </div>
      <Layout pageTitle="Thank You">
        <Seo title="Thank you" />
        <div className="mx-auto mt-20 flex flex-col justify-center p-4 text-center xl:mt-0 xl:mr-48 xl:w-1/2 xl:items-end xl:p-0 xl:text-right">
          <p className="p-4 text-lg xl:px-0">
            Thank you for reaching out, I'll be in contact with you soon!
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center p-8 xl:mx-0 xl:justify-end xl:p-0">
            <Link
              to="/"
              className="mr-8 rounded bg-secondary p-2 font-mono font-semibold text-white shadow-md transition duration-500"
            >
              Back Home
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default ThankYouPage
