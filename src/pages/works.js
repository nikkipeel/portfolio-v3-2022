import * as React from "react"
import {Link} from 'gatsby';
import HeaderInfo from "../components/headerInfo"
import NavMenu from "../components/menu"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Projects from "../components/projects";

const WorksPage = () => (
<>
    <Seo title="Works" />
  <NavMenu></NavMenu>
  <header className="dark:bg-bgDark dark:text-white bg-white flex flex-col xl:flex-row py-16">
  <HeaderInfo></HeaderInfo>
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-center xl:text-right mt-20 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 xl:p-0 mb-8"><strong className="text-6xl">Portfolio</strong></h1>
    <p className="dark:text-white85 px-8 xl:px-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>
    
    <div className="flex justify-center items-center xl:justify-end mx-auto xl:mx-0 mt-8 p-8 xl:p-0">
      <Link to='/about' id="view-works" className="dark:bg-darkSecondary bg-secondary text-white font-semibold font-mono rounded shadow-md p-2 mr-8  focus:ring-2 focus:ring-highlight transition duration-500 tracking-tight">About Me</Link>
      <Link to='/contact' className="dark:text-darkSecondary bg-transparent text-secondary border-2 border-secondary dark:border-darkSecondary font-mono font-semibold rounded shadow-md p-2 hover:bg-secondary dark:hover:bg-darkSecondary dark:hover:text-white hover:text-white transition duration-500 tracking-tight">Contact Me</Link>
    </div>

  </div>
  </header>

  <section id="works" className="dark:bg-bgPrimary bg-primary w-full h-full">
      <div className="flex flex-col justify-center items-center w-full py-20">
       <Projects></Projects>
      </div>
    </section>
<Footer></Footer>
  </>
)

export default WorksPage
