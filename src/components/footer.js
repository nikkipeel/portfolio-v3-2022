import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
        <footer className="flex flex-col lg:flex-row items-center bg-secondary justify-between w-full h-full p-8">
        <div class="flex flex-col lg:flex-row items-start lg:items-center w-full text-left lg:gap-8">
        <StaticImage className="rounded-full h-20 w-20 drop-shadow-md shadow-inner" src="../images/selfie.jpg" alt="Portrait"  placeholder="blurred" loading="eager"/>
        <div className="flex flex-col w-full my-4">
          <h4 className="text-white text-xl font-semibold font-bree tracking-widest drop-shadow-md">Nikki Peel</h4>
          <em className="text-base dark:text-white85">Front End Developer</em>
          <a href="mailto:nikkipeel.dev@gmail.com" className="text-base text-white font-bold underline-offset-2 hover:underline">nikkipeel.dev@gmail.com</a>
          <a href="#" className="flex text-white uppercase font-mono font-semibold underline-offset-2 drop-shadow-lg hover:underline hover:scale-105">Download Resume
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          </a>
        </div>
        </div>
            <div className="flex lg:justify-end w-full my-4">
                <a aria-label="linked in" href="https://www.linkedin.com/in/nikkipeel" className="text-white text-xl pr-4"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a aria-label="github"  href="https://www.github.com/nikkipeel" className="text-white text-xl pr-4"><FontAwesomeIcon icon={faGithub} /></a>
                <a aria-label="codepen" href="https://www.codepen.io/nikki-peel" className="text-white text-xl pr-4"><FontAwesomeIcon icon={faCodepen} /></a>
                <a aria-label="blog" href="https://nikkipeel.netlify.app" className="text-white text-xl  pr-4"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            </div>
        </footer>
  )
  }


export default Footer
