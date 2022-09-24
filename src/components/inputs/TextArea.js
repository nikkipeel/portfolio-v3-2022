import React from "react"
import "./inputs.css"

const TextArea = ({ id, label, name, className, handleChange }) => {
  return (
    <>
      <label for={id}>{label}</label>
      <textarea className={className} name={name} onChange={handleChange} />
    </>
  )
}

export default TextArea
