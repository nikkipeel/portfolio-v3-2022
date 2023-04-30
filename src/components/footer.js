import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import resume from "../images/resume-nikkipeel.pdf"
import "./footer.css"

function Footer() {
  return (
    <>
      <footer>
        <div className="content-wrapper">
          <div className="contact-info-wrapper">
            <div className="contact-info">
              <h2>Nikki Peel</h2>
              <em>Front End Developer</em>
              <p>nikkipeel.dev@gmail.com</p>
              <a href={resume} target="_blank" className="link-resume">
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
          <div className="social-links">
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
    </>
  )
}

export default Footer
