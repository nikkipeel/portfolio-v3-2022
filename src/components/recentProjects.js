import React from "react"
import { Link } from "gatsby"
import Projects from "./projects"

const RecentProjects = () => {
  return (
    <div
      id="projects"
      className="flex h-full w-full flex-col items-center justify-center bg-primary py-20 dark:bg-bgPrimary"
    >
      <h2 className="section-heading w-auto text-center text-3xl font-bold tracking-wide text-white">
        Recent Projects
      </h2>
      <Projects></Projects>
      <div className="mx-auto flex justify-center bg-primary pt-8 pb-20 dark:bg-bgPrimary">
        <Link
          to="/works"
          className="hover:text-large m-6 rounded bg-secondary py-2 px-4 font-mono font-semibold tracking-tight text-white shadow-md transition duration-500 hover:scale-105 hover:brightness-125"
        >
          View All
        </Link>
      </div>
    </div>
  )
}

export default RecentProjects
