import React from "react"
import LinkButton from "./buttons/LinkButton"
import Info from "./cards/Info"
import LazySlide from "../animations/lazySlide"
import LazyFade from "../animations/lazyFade"

function Header() {
  return (
    <>
      <header className="bg-light flex flex-col py-16 lg:flex-row">
        <Info />

        <div className="mx-auto mt-12 flex flex-col justify-center p-4 text-center lg:mt-0 lg:mr-48 lg:w-1/2 lg:items-end lg:p-0 lg:text-right">
          <LazyFade>
            <h1 className="mb-8 p-4 text-xl font-semibold lg:p-0">
              Hi, my name is{" "}
              <strong id="name" className="p-4 text-5xl lg:pl-4 lg:pr-0">
                Nikki
              </strong>
            </h1>
            <p className="dark:text-white65 px-8 lg:px-0">
              I'm a Front End Developer living in the United States and love creating
              user-friendly, responsive websites. I work at <a
                href="https://www.gravityworksdesign.com"
                target="_blank"
                className="gradient-link text-base"
              >
                Gravity Works Design &amp; Development
              </a>, contributing to and building out impactful websites for a
              variety of large scale clients. On this site you can browse my recent personal projects, read
              blog posts I've written, or check out recent posts from some of my favorite blogs. Feel free to reach out and we can discuss all things web-dev.
            </p>
          </LazyFade>
          <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-12 p-8 lg:mx-0 lg:flex-row lg:justify-end lg:p-0">
            <LazySlide>
              <LinkButton
                link="/projects"
                id="projects-link--home-header"
                text="View Portfolio"
                classes="button button--secondary fill-right font-mono font-semibold tracking-tight shadow-md"
              />
            </LazySlide>
            <LazySlide>
              <LinkButton
                link="/contact"
                id="contact-link--home-header"
                text="Contact Me"
                classes="button button--secondary__outline font-mono font-semibold tracking-tight shadow-md"
              />
            </LazySlide>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
