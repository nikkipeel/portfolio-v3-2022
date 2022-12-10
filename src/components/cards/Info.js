import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import resume from "../../images/resume-nikkipeel.pdf"
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
          href={resume}
          target="_blank"
          className="link-resume text-dark p-1 font-mono font-bold uppercase hover:scale-105 hover:underline  dark:text-white"
        >
          Download Resume
        </a>
        <div className="card--social-links my-2 flex h-8 justify-center">
          <a
            aria-label="linked in"
            href="https://www.linkedin.com/in/nikkipeel"
            className="text-dark hover:text-secondary my-auto mr-2 px-2 text-2xl hover:scale-105 dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
          </a>
          <a
            aria-label="github"
            href="https://www.github.com/nikkipeel"
            className="text-dark hover:text-secondary  my-auto mr-2 px-2 text-2xl hover:scale-105 dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
          </a>
          <a
            aria-label="codepen"
            href="https://www.codepen.io/nikki-peel"
            className="text-dark hover:text-secondary my-auto mr-2 px-2 text-2xl  hover:scale-105 dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faCodepen} />
          </a>
          <a
            aria-label="email"
            href="mailto:nikkipeel.dev@gmail.com"
            className="text-dark hover:text-secondary my-auto px-2 text-2xl hover:scale-105 dark:brightness-125"
          >
            <FontAwesomeIcon className="h-6 w-6" icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info
