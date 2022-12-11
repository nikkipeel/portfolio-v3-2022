import * as React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Seo from "../components/seo"
import NavMenu from "../components/menu/menu"
import Layout from "../components/layout"
import Form from "../components/form"
import "../components/layout.css"

const ContactPage = ({ location, pageContext }) => {
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
      <div class="breadcrumbs">
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
      <Layout pageTitle="Contact">
        <Seo title="Contact Me" />
        <div className="mx-auto flex w-full flex-col items-center p-4 lg:w-3/4 xl:w-1/2">
          <p className="p-2 text-lg leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
            consequuntur asperiores explicabo quis ut magnam, perferendis
            expedita odio impedit iure natus consectetur officia accusamus nisi
            alias quasi blanditiis! Sunt, provident! Aspernatur magni omnis
            repellendus facilis numquam dignissimos maxime ducimus maiores natus
            impedit ipsam, aperiam, pariatur nostrum accusantium! Totam
            voluptates dolorem ipsam. Maxime pariatur ut, velit eum incidunt
            perspiciatis obcaecati porro. Tenetur, neque nulla reiciendis minus
            delectus, unde ratione dicta recusandae harum officiis enim eius,
            error debitis eveniet! Veniam, odit ad. Accusantium aliquid
            reiciendis magni fugit maxime deleniti ratione debitis magnam?
          </p>
          <Form></Form>
        </div>
      </Layout>
    </>
  )
}
export default ContactPage
