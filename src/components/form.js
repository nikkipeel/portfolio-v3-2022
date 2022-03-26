import React from "react"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Form() {
  const [state, setState] = React.useState({})

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
    <div className="mx-auto mt-12 w-full rounded-sm bg-dark p-8 text-white focus-within:border-2 focus-within:border-highlight dark:bg-bgDark md:w-3/4 lg:p-12 xl:w-1/2">
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
          <div className="md:mx-auto">
            <p>
              <label className="font-mono tracking-tight">
                First Name:
                <br />
                <input
                  className="border-transparent focus:border-transparent mt-2 mb-4 rounded-sm bg-white p-2 font-sans text-base text-dark focus:outline-none focus:ring-2 focus:ring-highlight dark:bg-dark dark:text-white dark:focus:ring-darkPrimary"
                  type="text"
                  name="first-name"
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label className="font-mono tracking-tight">
                Last Name:
                <br />
                <input
                  className="border-transparent focus:border-transparent mt-2 mb-4 rounded-sm bg-white p-2 font-sans text-base text-dark focus:outline-none focus:ring-2 focus:ring-highlight dark:bg-dark dark:text-white dark:focus:ring-darkPrimary"
                  type="text"
                  name="last-name"
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label className="font-mono tracking-tight">
                Email Address:
                <br />
                <input
                  className="border-transparent focus:border-transparent mt-2 mb-4 rounded-sm bg-white p-2 font-sans text-base text-dark focus:outline-none focus:ring-2 focus:ring-highlight dark:bg-dark dark:text-white dark:focus:ring-darkPrimary"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </label>
            </p>
          </div>
          <p className="md:mx-auto">
            <label className="font-mono tracking-tight">
              Message:
              <br />
              <textarea
                className="border-transparent focus:border-transparent mt-2 mb-4 rounded-sm bg-white p-2 font-sans text-base text-dark focus:outline-none focus:ring-2 focus:ring-highlight dark:bg-dark dark:text-white dark:focus:ring-darkPrimary"
                name="message"
                onChange={handleChange}
              />
            </label>
          </p>
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 flex justify-center rounded bg-secondary py-3 px-12 font-mono font-semibold uppercase text-white shadow-md transition duration-500 hover:brightness-125 focus:ring-highlight"
        >
          Send
        </button>
      </form>
    </div>
  )
}
