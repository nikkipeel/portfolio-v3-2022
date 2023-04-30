import React, { useState } from "react"
import { navigate } from "gatsby"
import ArrowButton from "./buttons/ArrowButton"
import TextInput from "./inputs/TextInput"
import TextArea from "./inputs/TextArea"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Form() {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div className="form-wrapper mx-4 mt-12 w-full rounded-sm md:mx-auto md:p-4">
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="p-8 md:p-4"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <div className="gap:0 mx-auto grid grid-cols-1 justify-around md:grid-cols-2 md:gap-2 lg:gap-4">
          <div className="form-item md:mx-auto">
            <TextInput
              label="First Name:"
              id="contact-form-first-name"
              name="first name"
              className="mt-2 mb-4 rounded-sm p-2 font-sans text-base"
            />
            <TextInput
              label="Last Name:"
              id="contact-form-last-name"
              name="last name"
              className="mt-2 mb-4 rounded-sm p-2 font-sans text-base"
            />
            <TextInput
              label="Email Address:"
              id="contact-form-email"
              name="email address"
              className="mt-2 mb-4 rounded-sm p-2 font-sans text-base"
            />
          </div>
          <div className="form-item">
            <TextArea
              id="contact-form-message"
              name="message"
              label="Message:"
              className="mt-2 mb-4 rounded-sm p-2 font-sans text-base"
            />
          </div>
        </div>
        <ArrowButton
          id="submit-form"
          type="submit"
          text="Submit"
          classes="button button--secondary button--with-arrow font-mono font-semibold tracking-tight text-white shadow-md hover:brightness-125 mt-4 mx-auto"
        />
      </form>
    </div>
  )
}
