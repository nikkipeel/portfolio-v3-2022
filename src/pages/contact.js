import * as React from "react"
import Seo from "../components/seo"
import NavMenu from "../components/menu"
import Layout from "../components/layout"
import Form from "../components/form"

const ContactPage = () => ( 
  <>
  <NavMenu></NavMenu>
  <Layout pageTitle="Contact Me">
      <Seo title="Contact" />
      <div className="flex flex-col items-center w-full lg:w-3/4 xl:w-1/2 mx-auto p-4">        
        <p className="text-lg leading-relazed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, consequuntur asperiores explicabo quis ut magnam, perferendis expedita odio impedit iure natus consectetur officia accusamus nisi alias quasi blanditiis! Sunt, provident!
        Aspernatur magni omnis repellendus facilis numquam dignissimos maxime ducimus maiores natus impedit ipsam, aperiam, pariatur nostrum accusantium! Totam voluptates dolorem ipsam. Maxime pariatur ut, velit eum incidunt perspiciatis obcaecati porro.
        Tenetur, neque nulla reiciendis minus delectus, unde ratione dicta recusandae harum officiis enim eius, error debitis eveniet! Veniam, odit ad. Accusantium aliquid reiciendis magni fugit maxime deleniti ratione debitis magnam?</p>
        <Form></Form>
        </div>
        </Layout>
        </>
)

export default ContactPage
