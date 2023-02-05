import React from "react"
import LazySlide from "../../animations/lazySlide"
import "./cards.css"

const Bookmark = ({ blog, title, tags, link }) => {
  return (
    <LazySlide>
      <a className="card-read text-left" href={link}>
        <h3>{title}</h3>
        <strong>{blog}</strong>
        {tags && (
            <>
            <div className="flex items-end gap-8 md:gap-20">
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <>
                    <span className="tag tag--read">
                      #{tag}
                    </span>
                  </>
                ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="card-read__icon-text">Visit {blog}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>
                </div>
              </div>
            </>
        )}
        </a>
    </LazySlide>
  )
}

export default Bookmark