import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import resume from "../images/resume-nikkipeel.pdf"
import LastModified from "./lastModified"

function Footer() {

  const isBrowser = typeof document !== "undefined"

  return (
    <>
    <footer className="h-full w-full p-8">
      <div className="flex flex-col items-center justify-between lg:flex-row">
      <div className="flex w-full flex-col items-start px-2 text-left lg:flex-row lg:items-center lg:gap-8">
        <div className="my-4 flex w-auto max-w-full flex-col">
          <h2 className="my-1 font-macho text-xl font-semibold tracking-widest drop-shadow-md">
            Nikki Peel
          </h2>
          <em className="my-1 text-base">Front End Developer</em>
              <p>nikkipeel.dev@gmail.com</p>
          <a
            href={resume}
            target="_blank"
            className="my-2 flex items-center font-mono font-semibold uppercase leading-tight tracking-wide underline-offset-2 drop-shadow-lg hover:scale-105 hover:underline"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="my-4 flex w-full lg:justify-end">
        <a
          aria-label="linked in"
          href="https://www.linkedin.com/in/nikkipeel"
          className="mr-2 px-2 text-2xl hover:scale-105"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faLinkedin} />
        </a>
        <a
          aria-label="github"
          href="https://www.github.com/nikkipeel"
          className="mr-2 px-2 text-2xl hover:scale-105"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faGithub} />
        </a>
        <a
          aria-label="codepen"
          href="https://www.codepen.io/nikki-peel"
          className="mr-2 px-2 text-2xl hover:scale-105"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faCodepen} />
        </a>
        <a
          aria-label="email"
          href="mailto:nikkipeel.dev@gmail.com"
          className="px-2 text-2xl hover:scale-105"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faEnvelope} />
        </a>
      </div>
      </div>


    </footer>
    <div className="site-caption">
    {isBrowser &&
      <LastModified></LastModified>
    }
    </div>
    </>
  )
}

export default Footer
