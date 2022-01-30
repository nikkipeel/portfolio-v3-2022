import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HeaderInfo() {
  return (
  <div className="flex flex-col xl:w-1/2 justify-center items-center mx-auto xl:ml-36" >
    <StaticImage className="header-image border-2 border-secondary dark:border-2 dark:border-darkSecondary h-60 w-52 shadow-inner" src="../images/selfie.jpg" alt="Portrait"  placeholder="blurred" loading="eager"/>
    <div className="card flex flex-col text-center text-dark bg-white dark:bg-bgSecondary dark:text-white rounded-sm border-2 border-secondary dark:border-darkSecondary shadow-xl w-full xl:w-2/3 px-12 py-4 my-8">
      
      <h1 className="text-xl font-bold dark:text-white85">Nikki Peel</h1>
      <em className="text-base dark:text-white65">Front End Developer</em>
      <a href="mailto:nikkipeel.dev@gmail.com" className="p-1 text-base dark:text-white85 font-bold hover:underline focus:ring-2 focus:ring-highlight" style={{textUnderlineOffset: '3px'}}>nikkipeel.dev@gmail.com</a>
      
        <a href="#" className="link-resume dark:text-white text-dark uppercase font-bold hover:underline hover:scale-105 focus:ring-2 focus:ring-highlight p-1" style={{}}>Download Resume</a>
        <div className="mt-4">
          <a aria-label="linked in" href="https://www.linkedin.com/in/nikkipeel" className="dark:text-darkSecondary text-dark text-2xl hover:text-secondary focus:text-secondary focus:ring-2 focus:ring-highlight p-2"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a aria-label="github"  href="https://www.github.com/nikkipeel" className="dark:text-darkSecondary text-dark text-2xl hover:text-secondary focus:text-secondary focus:ring-2 focus:ring-highlight p-2"><FontAwesomeIcon icon={faGithub} /></a>
          <a aria-label="codepen" href="https://www.codepen.io/nikki-peel" className="dark:text-darkSecondary text-dark text-2xl hover:text-secondary focus:text-secondary focus:ring-2 focus:ring-highlight p-2"><FontAwesomeIcon icon={faCodepen} /></a>
          <a aria-label="blog" href="https://nikkipeel.netlify.app" className="dark:text-darkSecondary text-dark text-2xl hover:text-secondary focus:text-secondary focus:ring-2 focus:ring-highlight p-2"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
      </div>
    
    </div>
</div>
  )
  }


export default HeaderInfo
