import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

function HeaderInfo() {
  return (
    <div className="header-card mx-auto flex flex-col items-center justify-center xl:ml-36 xl:w-1/2">
      <StaticImage
        className="header-image h-60 w-52 border-2 border-secondary shadow-inner dark:border-2 dark:border-darkSecondary"
        src="../images/selfie.jpg"
        alt="Portrait"
        placeholder="blurred"
        loading="eager"
      />
      <div className="card my-8 flex w-full flex-col rounded-sm border-2 border-secondary bg-white px-12 py-4 text-center text-dark shadow-xl dark:border-darkSecondary dark:bg-bgSecondary dark:text-white">
        <h1 className="text-xl font-bold dark:text-white85">Nikki Peel</h1>
        <em className="text-base dark:text-white65">Front End Developer</em>
        <a
          href="mailto:nikkipeel.dev@gmail.com"
          className="p-1 font-macho text-base font-bold hover:underline dark:text-white85"
          style={{ textUnderlineOffset: "3px" }}
        >
          nikkipeel.dev@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/nikkipeel"
          className="link-resume p-1 font-mono font-bold uppercase text-dark hover:scale-105 hover:underline  dark:text-white"
        >
          Download Resume
        </a>
        <div className="my-2 flex h-8 justify-center">
          <a
            aria-label="linked in"
            href="https://www.linkedin.com/in/nikkipeel"
            className="my-auto mr-2 px-2 text-2xl text-dark hover:scale-105 hover:text-secondary dark:text-darkSecondary dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
          </a>
          <a
            aria-label="github"
            href="https://www.github.com/nikkipeel"
            className="my-auto mr-2 px-2 text-2xl text-dark hover:scale-105 hover:text-secondary dark:text-darkSecondary dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
          </a>
          <a
            aria-label="codepen"
            href="https://www.codepen.io/nikki-peel"
            className="my-auto mr-2 px-2 text-2xl text-dark hover:scale-105 hover:text-secondary  dark:text-darkSecondary dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faCodepen} />
          </a>
          <a
            aria-label="blog"
            href="https://nikkipeel.netlify.app"
            className="my-auto px-2 text-2xl text-dark hover:scale-105 hover:text-secondary dark:text-darkSecondary dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderInfo
