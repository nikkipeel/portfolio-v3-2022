import React from "react"
import LinkButton from "./buttons/LinkButton"
import Info from "./cards/Info"
import LazySlide from "../animations/lazySlide"
import LazyFade from "../animations/lazyFade"
import "./header.css"

function Header() {
  return (
    <>
      <header className="bg-light">
        <Info />

        <div className="content-wrapper">
          <LazyFade>
            <h1>
              Hi, my name is <strong id="name">Nikki</strong>
            </h1>
            <p>
              I'm a Front End Developer working remotely in the United States. I
              enjoy using my imagination and technical skills to build out
              impactful, user-friendly websites. I'm always striving to stay
              up-to-date with the latest front-end technologies and best
              practices. On this site you can browse my recent personal
              projects, read blog posts I've written, or check out recent posts
              from some of my favorite blogs.
            </p>
          </LazyFade>
          <div className="button-wrapper">
            <LazySlide>
              <LinkButton
                link="/projects"
                id="projects-link--home-header"
                text="View Portfolio"
                classes="button button--secondary fill-right"
              />
            </LazySlide>
            <LazySlide>
              <LinkButton
                link="/contact"
                id="contact-link--home-header"
                text="Contact Me"
                classes="button button--secondary__outline"
              />
            </LazySlide>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
