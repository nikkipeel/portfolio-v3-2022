import React from "react"

const Select = ({ name, id, label, options, onChange }) => {
  return (
    <>
      <div className="form-item">
        <label className="form-item__label" htmlFor={name}>
          {label}
        </label>
        <select
          className="form-item__select"
          name={name}
          id={id}
          onChange={onChange}
        >
          {options.map(item => {
            return (
              <>
                <option key={item} value={item}>
                  {item}
                </option>
              </>
            )
          })}
        </select>
      </div>
    </>
  )
}
export default Select
