import React from "react"

const TextArea = ({ id, label, name, className, handleChange }) => {
  return (
    <>
      <label for={id}>{label}</label>
      <textarea className={className} name={name} onChange={handleChange} />
    </>
  )
}

export default TextArea
