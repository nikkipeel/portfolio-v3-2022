import React from "react"
import "../layout.css"

const Select = ({ name, id, label, options, onChange, className }) => {
  return (
    <>
      <div className="form-item form-item__select">
        <label className="form-item__label" htmlFor={name}>
          {label}
        </label>
        <div className="form-item__select--wrapper">
          <select className={className} name={name} id={id} onChange={onChange}>
            {options.map(item => {
              return (
                <>
                  <option
                    className="form-item__select--option p-3 hover:bg-secondary"
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                </>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}
export default Select
