import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
          ariaLabel="HTML"
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faCss3}
          ariaLabel="CSS"
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faSass}
          ariaLabel="Sass"
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faJsSquare}
          ariaLabel="Javascript"
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faReact}
          ariaLabel="React"
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faWordpress}
          ariaLabel="Wordpress"
          className="skill-icon lazy-slide  pointer-events-none m-10 p-2 text-7xl md:text-8xl"
        />
      </LazySlide>
      <LazySlide>
        <FontAwesomeIcon
          icon={faDrupal}
          ariaLabel="Drupal"
          className="skill-icon lazy-slide pointer-events-none m-10 p-2 text-7xl md:text-8xl"
        />
      </LazySlide>
    </div>
  )
}

export default SkillIcons
