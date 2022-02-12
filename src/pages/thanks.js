import * as React from "react"
import {Link } from 'gatsby';
import Seo from "../components/seo"
import Layout from "../components/layout"

const ThankYouPage = () => ( 
  <>
  <Layout pageTitle="Thank You">
  <Seo title="Thank you" />
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-center xl:text-right mt-20 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 xl:p-0 mb-8"><strong className="text-6xl">Thanks!</strong></h1>
    <p className="px-8 xl:px-0">Thank you for reaching out, I'll be in contact with you soon!</p>
    <div className="flex justify-center items-center xl:justify-end mx-auto xl:mx-0 mt-8 p-8 xl:p-0">
      <Link to="/" className="bg-secondary text-white font-mono font-semibold rounded shadow-md p-2 mr-8 transition duration-500">Back Home</Link>
    </div>
  </div>
        </Layout>
        </>
)

export default ThankYouPage