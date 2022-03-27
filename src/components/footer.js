import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className="flex h-full w-full flex-col items-center justify-between bg-secondary p-8 lg:flex-row">
      <div class="flex w-full flex-col items-start px-2 text-left lg:flex-row lg:items-center lg:gap-8">
        <StaticImage
          className="h-20 w-20 rounded-full shadow-inner drop-shadow-md"
          src="../images/selfie.jpg"
          alt="Portrait"
          placeholder="blurred"
          loading="eager"
        />
        <div className="my-4 flex w-auto max-w-full flex-col">
          <h2 className="my-1 font-bree text-xl font-semibold tracking-widest text-white drop-shadow-md">
            Nikki Peel
          </h2>
          <em className="my-1 text-base dark:text-white85">
            Front End Developer
          </em>
          <a
            href="mailto:nikkipeel.dev@gmail.com"
            className="my-1 text-base font-bold text-white underline-offset-2 hover:underline"
          >
            nikkipeel.dev@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nikkipeel"
            className="my-2 flex items-center font-mono font-semibold uppercase leading-tight tracking-wide text-white underline-offset-2 drop-shadow-lg hover:scale-105 hover:underline"
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
          className="mr-2 px-2 text-2xl text-white hover:scale-105"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faLinkedin} />
        </a>
        <a
          aria-label="github"
          href="https://www.github.com/nikkipeel"
          className="mr-2 px-2 text-2xl text-white hover:scale-105"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faGithub} />
        </a>
        <a
          aria-label="codepen"
          href="https://www.codepen.io/nikki-peel"
          className="mr-2 px-2 text-2xl text-white hover:scale-105"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faCodepen} />
        </a>
        <a
          aria-label="blog"
          href="https://nikkipeel.netlify.app"
          className="px-2 text-2xl text-white hover:scale-105"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faExternalLinkAlt} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
