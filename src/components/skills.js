import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faUniversalAccess } from "@fortawesome/free-solid-svg-icons"
import SkillIcons from "./skillIcons"

function Skills() {
  return (
    <div className="skills h-full w-full">
      <div className="lg:w-50 flex w-full flex-col items-center justify-center py-20">
        <h2 className="section-heading w-auto text-4xl font-bold tracking-wide text-white">
          Skills
        </h2>

        <div className=" grid-cols mx-auto mt-20 grid gap-20 p-4 md:grid-cols-2 md:gap-8 xl:w-3/4">
          <div className="skills--card col rounded-sm text-center">
            <FontAwesomeIcon
              icon={faCode}
              className="pointer-events-none text-7xl"
              style={{ marginTop: "-2rem" }}
            />
            <h3 className="py-2 font-mono text-2xl font-semibold leading-tight">
              Development
            </h3>
            <p className="px-8 pb-8">
              I enjoy brainstorming solutions for complex technical issues and building user-friendly websites. I'm fluent in HTML and Javascript (including React!) and love building out content structures with Content Management Systems such as Drupal and Wordpress.
            </p>
          </div>
          <div className="skills--card col rounded-sm text-center">
            <FontAwesomeIcon
              icon={faUniversalAccess}
              className="pointer-events-none text-7xl"
              style={{ marginTop: "-2rem" }}
            />
            <h3 className="py-2 font-mono text-2xl font-semibold leading-tight">
              Accessibility
            </h3>

            <p className="px-8 pb-8">
              The websites I contribute to and create meet <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" className="gradient-link">WCAG Standards</a> to <em>at least</em> the AA level. I utilize modern accessiblility tools such as Axe and Lighthouse and perform thorough manual testing to ensure keyboard and screenreader accessiblity
            </p>
          </div>
        </div>
        <SkillIcons></SkillIcons>
      </div>
    </div>
  )
}

export default Skills
