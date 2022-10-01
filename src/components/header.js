import React from "react"
import LinkButton from "./buttons/LinkButton"
import Info from "./cards/Info"
import LazySlide from "../animations/lazySlide"
import LazyFade from "../animations/lazyFade"

function Header() {
  return (
    <>
      <header className="text-dark dark:bg-bgDark flex flex-col bg-white py-16 dark:text-white xl:flex-row">
        <Info />

        <div className="mx-auto mt-12 flex flex-col justify-center p-4 text-center xl:mt-0 xl:mr-48 xl:w-1/2 xl:items-end xl:p-0 xl:text-right">
          <LazyFade>
            <h1 className="mb-8 p-4 text-xl font-semibold xl:p-0">
              Hi, my name is{" "}
              <strong id="name" className="p-4 text-5xl">
                Nikki
              </strong>
            </h1>
            <p className="dark:text-white65 px-8 lg:p-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit
              sed, sit blanditiis mollitia qui sapiente odio molestiae ratione
              consequuntur laboriosam quibusdam eos. Unde odio harum soluta
              totam, ad minima id voluptates necessitatibus labore voluptate?
              Velit nihil laboriosam atque similique sunt?
            </p>
          </LazyFade>
          <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-12 p-8 lg:flex-row lg:justify-end xl:mx-0 xl:p-0">
            <LazySlide>
              <LinkButton
                link="/projects"
                id="projects-link--home-header"
                text="View Portfolio"
                classes="button--secondary hover:text-large rounded p-2 font-mono font-semibold tracking-tight shadow-md transition duration-500 hover:scale-125 hover:brightness-125 dark:brightness-125"
              />
            </LazySlide>
            <LazySlide>
              <LinkButton
                link="/contact"
                id="contact-link--home-header"
                text="Contact Me"
                classes="button--secondary__outline hover:text-large rounded p-2 font-mono font-semibold font-semibold tracking-tight shadow-md transition duration-500 hover:scale-125 dark:brightness-125"
              />
            </LazySlide>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
