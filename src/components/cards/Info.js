import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "./cards.css"

function Info() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center xl:ml-36 xl:w-1/2">
      <StaticImage
        className="header-image h-60 w-52 shadow-inner"
        src="../../images/selfie.jpg"
        alt="Portrait"
        placeholder="blurred"
        loading="eager"
      />
      <div className="card text-dark my-8 flex w-full flex-col rounded-sm px-12 py-4 text-center shadow-xl dark:text-white">
        <h1 className="dark:text-white85 text-xl font-bold">Nikki Peel</h1>
        <em className="dark:text-white65 text-base">Front End Developer</em>
        <a
          href="mailto:nikkipeel.dev@gmail.com"
          className="dark:text-white85 p-1 font-macho text-base font-bold hover:underline"
          style={{ textUnderlineOffset: "3px" }}
        >
          nikkipeel.dev@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/nikkipeel"
          className="link-resume text-dark p-1 font-mono font-bold uppercase hover:scale-105 hover:underline  dark:text-white"
        >
          Download Resume
        </a>
        <div className="my-2 flex h-8 justify-center">
          <a
            aria-label="linked in"
            href="https://www.linkedin.com/in/nikkipeel"
            className="text-dark hover:text-secondary dark:text-darkSecondary my-auto mr-2 px-2 text-2xl hover:scale-105 dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
          </a>
          <a
            aria-label="github"
            href="https://www.github.com/nikkipeel"
            className="text-dark hover:text-secondary dark:text-darkSecondary my-auto mr-2 px-2 text-2xl hover:scale-105 dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
          </a>
          <a
            aria-label="codepen"
            href="https://www.codepen.io/nikki-peel"
            className="text-dark hover:text-secondary dark:text-darkSecondary my-auto mr-2 px-2 text-2xl  hover:scale-105 dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faCodepen} />
          </a>
          <a
            aria-label="blog"
            href="https://nikkipeel.netlify.app"
            className="text-dark hover:text-secondary dark:text-darkSecondary my-auto px-2 text-2xl hover:scale-105 dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info