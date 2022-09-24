import React from "react"
import "./inputs.css"

const TextInput = ({ type, id, label, name, className, handleChange }) => {
  return (
    <>
      <label for={id}>{label}</label>

      <input
        className={className}
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
      />
    </>
  )
}

export default TextInput
