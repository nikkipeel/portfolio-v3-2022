import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import LazySlideRight from "../../animations/lazySlideRight"
import "./cards.css"

const Project = ({ slug, image, imageAlt, title, tags }) => {
  return (
    <LazySlideRight>
      <Link
        to={"/projects/" + slug}
        className="card-project col m-4 rounded shadow-sm dark:shadow-sm"
        tabIndex="0"
        key={slug + " - Project"}
      >
        {image && (
          <>
            <GatsbyImage image={image} alt={imageAlt} placeholder="blurred" />
          </>
        )}

        <div className="card-project--content mx-auto flex flex-col">
          <div className="card-project--content__header">
            <h3 className="my-2 text-xl font-bold dark:border-none">{title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                stroke="currentColor"
                strokeWidth="2px"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="tags my-2 flex gap-2">
            {tags && (
              <>
                {tags.map(tag => (
                  <>
                    {tag === "All" ? (
                      ""
                    ) : (
                      <span className="tag rounded-md border-2 p-1 text-sm font-semibold">
                        {tag}
                      </span>
                    )}
                  </>
                ))}
              </>
            )}
          </div>
          <p className="my-2 font-mono text-base font-semibold hover:underline">
            Read more
          </p>
        </div>
      </Link>
    </LazySlideRight>
  )
}

export default Project
