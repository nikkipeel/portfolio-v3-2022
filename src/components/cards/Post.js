import React from "react"
import { Link } from "gatsby"
import LazySlideLeft from "../../animations/lazySlideLeft"
import "./cards.css"

const Post = ({ slug, date, title, description, tags, index }) => {
  return (
    <LazySlideLeft key={slug + "- Blog Post, index of " + index}>
      <Link
        to={"/blog/" + slug}
        state={{ postSlug: slug }}
        className="card-post flex flex-col rounded-sm border-2 border-secondary p-4 text-left leading-snug text-white hover:scale-105 hover:border-darkPrimary"
        tabIndex="0"
        key={slug}
      >
        <p className="mx-4 text-base italic tracking-wide text-white65">
          {date}
        </p>
        <h3 className="my-2 mx-4 text-xl font-bold">{title}</h3>

        <p className="my-2 mx-4 text-white65">{description}</p>
        <div className="my-4 mx-4 flex items-center justify-between gap-2">
          {tags && (
            <>
              <div className="flex w-1/2 flex-wrap gap-2 lg:w-auto">
                {tags.map(tag => (
                  <>
                    <span className="tag rounded-md border-2 border-darkPrimary py-1 px-2 text-sm font-semibold text-darkPrimary">
                      {tag}
                    </span>
                  </>
                ))}
              </div>
            </>
          )}

          <p className="link font-mono text-base font-bold text-white85 lg:pr-4">
            Read More
          </p>
        </div>
      </Link>
    </LazySlideLeft>
  )
}

export default Post
