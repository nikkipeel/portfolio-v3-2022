import React from "react"
import { Link } from "gatsby"
import "./buttons.css"

function LinkButton({ link, id, text, classes }) {
  return (
    <Link to={link} id={id} className={classes}>
      {text}
    </Link>
  )
}

export default LinkButton
