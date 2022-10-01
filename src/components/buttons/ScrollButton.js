import React from "react"
import "./buttons.css"

function ScrollButton({ id, label, text, classes, handleClick }) {
  return (
    <button
      id={id}
      aria-label={label}
      className={classes}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-8 w-8 rounded-full bg-dark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
        />
      </svg>
      <p className="hidden font-mono">{text}</p>
    </button>
  )
}

export default ScrollButton
