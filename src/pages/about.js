import * as React from "react"
import {Link} from 'gatsby';
import Seo from "../components/seo"
import HeaderInfo from "../components/headerInfo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
  <>
  <Seo title="About" />
  <Layout>
  <header className="dark:bg-bgDark dark:text-white bg-white text-dark flex flex-col xl:flex-row py-16">
  <HeaderInfo></HeaderInfo>
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-center xl:text-right mt-20 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 mb-8 xl:p-0"><strong className="text-6xl">About Me</strong></h1>
    <p className="px-8 my-4 xl:px-0 dark:text-white85">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>
    
    <div className="flex justify-center items-center xl:justify-end mx-auto xl:mx-0 mt-8 p-8 xl:p-0">
      <Link to="/works" className="dark:bg-darkSecondary bg-secondary text-white font-mono font-semibold rounded shadow-md p-2 mr-8  focus:ring-2 focus:ring-highlight transition duration-500 tracking-tight">View Portfolio</Link>
      <Link to="/contact" className="dark:text-darkSecondary dark:border-darkSecondary bg-transparent text-secondary border-2 border-secondary dark:border-darkSecondary font-mono font-semibold rounded shadow-md p-2 hover:bg-secondary dark:hover:bg-darkSecondary dark:hover:text-white hover:text-white  focus:ring-2 focus:ring-highlight transition duration-500 tracking-tight">Contact Me</Link>
    </div>

  </div>
  </header>

  <section className="dark:bg-bgPrimary bg-primary w-full h-full">
    
      
  </section>

  </Layout>
  </>
)

export default AboutPage
