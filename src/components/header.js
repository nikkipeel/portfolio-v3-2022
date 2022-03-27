import React from "react"
import HeaderInfo from "../components/headerInfo"

function Header() {
  return (
    <>
      <header className="flex flex-col bg-white py-16 text-dark dark:bg-bgDark dark:text-white xl:flex-row">
        <HeaderInfo></HeaderInfo>

        <div className="mx-auto mt-12 flex flex-col justify-center p-4 text-center xl:mt-0 xl:mr-48 xl:w-1/2 xl:items-end xl:p-0 xl:text-right">
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
            consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam,
            ad minima id voluptates necessitatibus labore voluptate? Velit nihil
            laboriosam atque similique sunt?
          </p>

          <div className="mx-auto mt-8 flex flex-col items-center justify-center p-8 lg:flex-row lg:justify-end xl:mx-0 xl:p-0">
            <button
              id="view-works"
              className="hover:text-large  m-6 rounded bg-secondary p-2 font-mono font-semibold tracking-tight text-white shadow-md transition duration-500 hover:scale-105 dark:brightness-125"
            >
              View Portfolio
            </button>
            <button className="bg-transparent hover:text-large rounded border-2 border-secondary p-2 font-mono font-semibold tracking-tight text-secondary shadow-md transition duration-500 hover:scale-105 hover:bg-secondary hover:text-white dark:border-darkSecondary dark:text-darkSecondary dark:brightness-125 dark:hover:bg-darkSecondary dark:hover:text-white">
              Contact Me
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
