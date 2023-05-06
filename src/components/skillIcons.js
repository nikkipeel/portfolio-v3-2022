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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          focusable="false"
          className="skill-icon gatsby lazy-slide pointer-events-none m-10 p-2 text-7xl md:text-8xl"
        >
          <title>Gatsby</title>
          <circle cx="14" cy="14" r="14" />
          <path d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z" />
        </svg>
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
