import React from "react"
import "./buttons.css"

function Button({ id, text, classes }) {
  return (
    <button id={id} className={classes}>
      {text}
    </button>
  )
}

export default Button
