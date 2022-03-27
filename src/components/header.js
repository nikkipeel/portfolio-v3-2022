import React from "react"
import { Link } from "gatsby"
import HeaderInfo from "../components/headerInfo"
import LazySlide from "../animations/lazySlide"
import LazyFade from "../animations/lazyFade"

function Header() {
  return (
    <>
      <header className="flex flex-col bg-white py-16 text-dark dark:bg-bgDark dark:text-white xl:flex-row">
        <HeaderInfo></HeaderInfo>

        <div className="mx-auto mt-12 flex flex-col justify-center p-4 text-center xl:mt-0 xl:mr-48 xl:w-1/2 xl:items-end xl:p-0 xl:text-right">
          <LazyFade>
            <h1 className="mb-8 p-4 text-xl font-semibold xl:p-0">
              Hi, my name is{" "}
              <strong id="name" className="p-4 text-6xl">
                Nikki
              </strong>
            </h1>
            <p className="px-8 dark:text-white65 lg:p-0">
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
              <Link
                to="/projects"
                id="view-works"
                className="hover:text-large rounded bg-secondary p-2 font-mono font-semibold tracking-tight text-white shadow-md transition duration-500 hover:scale-105 dark:brightness-125"
              >
                View Portfolio
              </Link>
            </LazySlide>
            <LazySlide>
              <Link
                to="/contact"
                className="bg-transparent hover:text-large rounded border-2 border-secondary p-2 font-mono font-semibold font-semibold tracking-tight text-secondary shadow-md transition duration-500 hover:scale-105 hover:bg-secondary hover:text-white dark:border-darkSecondary dark:text-darkSecondary dark:brightness-125 dark:hover:bg-darkSecondary dark:hover:text-white"
              >
                Contact Me
              </Link>
            </LazySlide>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
