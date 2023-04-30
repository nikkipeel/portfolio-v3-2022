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
// import "../header.css"

function Info() {
  return (
    <div className="info">
      <StaticImage
        className="header-image"
        src="../../images/selfie.jpg"
        alt="Portrait"
        placeholder="blurred"
        loading="eager"
      />
      <div className="card">
        <h1>Nikki Peel</h1>
        <em>Front End Developer</em>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="link-resume"
        >
          Download Resume
        </a>
        <div className="card--social-links">
          <a aria-label="linkedin" href="https://www.linkedin.com/in/nikkipeel">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a aria-label="github" href="https://www.github.com/nikkipeel">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a aria-label="codepen" href="https://www.codepen.io/nikki-peel">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a aria-label="email" href="mailto:nikkipeel.dev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info
