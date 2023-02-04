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
              I enjoy brainstorming solutions for complex technical issues and building responsive websites. I'm fluent in HTML, CSS, and Javascript. I have experience building out content structures with Content Management Systems such as Drupal and Wordpress.
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
              Ensuring that web content is accessible is a top priority. The projects I work on are built to meet 
              <div class="tooltip">WCAG
                <span class="tooltip--text">Web Content Accessibility Guidelines</span>
              </div> AA Level requirements. I utilize modern auditing tools and perform thorough manual testing to ensure keyboard and screenreader accessibility
            </p>
          </div>
        </div>
        <SkillIcons></SkillIcons>
      </div>
    </div>
  )
}

export default Skills
