import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faUniversalAccess } from "@fortawesome/free-solid-svg-icons"
import SkillIcons from "./skillIcons"

function Skills() {
  return (
    <div className="h-full w-full bg-primary dark:bg-bgPrimary">
      <div className="lg:w-50 flex w-full flex-col items-center justify-center py-20">
        <h2 className="section-heading w-auto text-4xl font-bold tracking-wide text-white">
          Skills
        </h2>

        <div className="grid-cols mx-auto mt-20 grid gap-20 p-4 md:grid-cols-2 md:gap-8 xl:w-3/4">
          <div className="col rounded-sm bg-white75 text-center text-dark dark:bg-bgDark dark:text-white">
            <FontAwesomeIcon
              icon={faCode}
              className="pointer-events-none text-7xl text-dark dark:text-darkPrimary"
              style={{ marginTop: "-2rem" }}
            />
            <h3
              className="py-2 font-mono text-2xl font-semibold leading-tight  text-dark dark:text-white"
              style={{ textShadow: "-1.5px 1.5px 0px #4A94A8" }}
            >
              Development
            </h3>
            <p className="px-8 pb-8 dark:text-white65">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              iure eos sit necessitatibus obcaecati ipsa itaque quisquam
              sapiente praesentium voluptas repellendus, voluptates ab ea ut
              aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis
              amet, odio magni!
            </p>
          </div>
          <div className="col rounded-sm bg-white75 text-center text-dark dark:bg-bgDark dark:text-white">
            <FontAwesomeIcon
              icon={faUniversalAccess}
              className="pointer-events-none text-7xl text-dark dark:text-darkPrimary"
              style={{ marginTop: "-2rem" }}
            />
            <h3
              className="py-2 font-mono text-2xl font-semibold leading-tight text-dark dark:text-white dark:shadow-none"
              style={{ textShadow: "-1.5px 1.5px 0px #4A94A8" }}
            >
              Accessibility
            </h3>

            <p className="px-8 pb-8 dark:text-white65">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              iure eos sit necessitatibus obcaecati ipsa itaque quisquam
              sapiente praesentium voluptas repellendus, voluptates ab ea ut
              aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis
              amet, odio magni!
            </p>
          </div>
        </div>
        <SkillIcons></SkillIcons>
      </div>
    </div>
  )
}

export default Skills
