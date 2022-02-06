import React from 'react';
import HeaderInfo from "../components/headerInfo"

function Header() {
  return (
    <>
<header className="dark:bg-bgDark dark:text-white bg-white text-dark flex flex-col xl:flex-row py-16">
  <HeaderInfo></HeaderInfo>
  
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-center xl:text-right mt-12 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 xl:p-0 mb-8">Hi, my name is <strong id="name" className="text-6xl p-4">Nikki</strong></h1>
    <p className="px-8 lg:p-0 dark:text-white65">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>
    
    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-end mx-auto xl:mx-0 mt-8 p-8 xl:p-0">
      <button id="view-works" className="font-mono dark:bg-darkSecondary bg-secondary text-white font-semibold rounded shadow-md p-2 m-6 transition duration-500 focus:ring-2 focus:ring-highlight tracking-tight">View Portfolio</button>
      <button className="font-mono bg-transparent text-secondary dark:text-darkSecondary border-2 border-secondary dark:border-darkSecondary font-semibold rounded shadow-md p-2 hover:bg-secondary dark:hover:bg-darkSecondary dark:hover:text-white hover:text-white focus:ring-2 focus:ring-highlight transition duration-500 tracking-tight">Contact Me</button>
    </div>

  </div>
</header>
</>
  )
  }


export default Header