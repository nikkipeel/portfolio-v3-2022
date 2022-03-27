import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHtml5, jsSquare } from "@fortawesome/free-solid-svg-icons"
import {
  faHtml5,
  faCss3,
  faSass,
  faJsSquare,
  faReact,
  faWordpress,
  faDrupal,
} from "@fortawesome/free-brands-svg-icons"
import LazySlide from "../animations/lazySlide"

function SkillIcons() {
  return (
    <div className="my-12 grid grid-cols-2 md:grid-cols-4">
      <LazySlide>
        <FontAwesomeIcon
          icon={faHtml5}
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl text-dark dark:text-darkPrimary md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faCss3}
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl text-dark dark:text-darkPrimary md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faSass}
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl text-dark dark:text-darkPrimary md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faJsSquare}
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl text-dark dark:text-darkPrimary md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faReact}
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl text-dark dark:text-darkPrimary md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faWordpress}
          className="skill-icon lazy-slide  pointer-events-none m-10 p-2 text-7xl text-dark dark:text-darkPrimary md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faDrupal}
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl text-dark dark:text-darkPrimary md:text-8xl"
        />
      </LazySlide>
    </div>
  )
}

export default SkillIcons
