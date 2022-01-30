import * as React from "react"
import Seo from "../components/seo"
import HeaderInfo from "../components/headerInfo"
import Layout from "../components/layout"
import Form from "../components/form"

const ContactPage = () => ( 
  <>
<Seo title="Contact" />
  <Layout>
  <header className="dark:bg-bgDark dark:text-white bg-white flex flex-col xl:flex-row py-16">
  <HeaderInfo></HeaderInfo>
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-center xl:text-right mt-20 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 xl:p-0 mb-8"><strong className="text-6xl">Contact Me</strong></h1>
    <p className="dark:text-white85 px-8 xl:px-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>

  </div>
  </header>

  <section id="contact" className="dark:bg-bgPrimary bg-primary w-full h-full">
        <div className="flex flex-col justify-center items-center w-full lg:w-50 py-20">
        <h1 className="w-46 text-3xl tracking-wide font-bold text-white" style={{borderBottom: '16px solid #6A4973', lineHeight: '.25', textShadow: '0px 0px 4px rgba(0,0,0,0.6'}}>Let's Connect</h1>
        <Form></Form>
        </div>
    </section>
        </Layout>
        </>
)

export default ContactPage
