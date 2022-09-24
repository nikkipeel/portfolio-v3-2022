import * as React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import NavMenu from "../components/menu"
import Layout from "../components/layout"

const AboutPage = ({ location, pageContext }) => {
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
      <Layout title="About" pageTitle="About">
        <div className="mx-auto w-full p-6 lg:w-3/4 xl:w-1/2">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos
            temporibus quam modi similique reiciendis ut consectetur
            voluptatibus accusamus quasi sint esse optio exercitationem quia
            possimus vero est, sapiente maiores? Eum veritatis at in culpa nisi
            dolor voluptas consequuntur explicabo laborum facere sint odio
            numquam ratione provident, voluptate adipisci doloremque inventore
            sit voluptatibus nam maiores? Vitae sunt cupiditate ducimus itaque.
            Minima aut corrupti magnam maiores accusamus nihil, cupiditate
            labore ipsa suscipit molestias cum voluptate incidunt possimus quos,
            illum enim a dignissimos ea odit fugiat molestiae! Omnis vero modi
            architecto ipsam. Excepturi laudantium ratione quam? Eveniet sed
            pariatur veniam aperiam modi illum nisi, voluptatibus, delectus
            nesciunt, impedit nostrum ex eligendi veritatis dolore dolorem
            itaque rem sint hic cupiditate natus officiis! Sequi? Autem dolorem,
            excepturi ipsum nostrum laboriosam doloremque dolorum quidem?
            Accusamus quaerat voluptatum sunt eveniet blanditiis soluta officia
            laborum reprehenderit recusandae repellendus reiciendis quia ea
            harum necessitatibus, animi ab voluptates? Explicabo?
          </p>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage
