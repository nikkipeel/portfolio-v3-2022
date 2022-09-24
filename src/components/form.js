import React, { useState } from "react"
import { navigate } from "gatsby"
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
    <div className="form-wrapper mx-4 mt-12 w-full rounded-sm bg-dark p-8 text-white dark:bg-bgDark md:mx-auto lg:p-12">
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <div className="gap:0 mx-auto grid grid-cols-1 items-center justify-around md:grid-cols-2 md:gap-2 lg:gap-4">
          <div className="form-item md:mx-auto">
            <TextInput
              label="First Name:"
              id="contact-form-first-name"
              name="first name"
              className="border-transparent mt-2 mb-4 rounded-sm bg-white p-2 font-sans text-base text-dark dark:bg-dark dark:text-white"
            />
            <TextInput
              label="Last Name:"
              id="contact-form-last-name"
              name="last name"
              className="border-transparent mt-2 mb-4 rounded-sm bg-white p-2 font-sans text-base text-dark dark:bg-dark dark:text-white"
            />
            <TextInput
              label="Email Address:"
              id="contact-form-email"
              name="email address"
              className="border-transparent mt-2 mb-4 rounded-sm bg-white p-2 font-sans text-base text-dark dark:bg-dark dark:text-white"
            />
          </div>
          <div className="form-item">
            <TextArea
              id="contact-form-message"
              name="message"
              label="Message:"
              className="border-transparent mt-2 mb-4 rounded-sm bg-white p-2 font-sans text-base text-dark dark:bg-dark dark:text-white"
            />
          </div>
        </div>
        <button
          aria-label="Send contact form"
          type="submit"
          className="mx-auto mt-4 flex justify-center rounded bg-secondary py-3 px-12 font-mono font-semibold uppercase text-white shadow-md transition duration-500 hover:brightness-125 "
        >
          Send
        </button>
      </form>
    </div>
  )
}
