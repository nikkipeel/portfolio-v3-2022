import React from 'react';
import { navigate } from 'gatsby'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Form() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
      <div className="dark:bg-bgDark bg-dark text-white w-full md:w-3/4 xl:w-1/2 rounded-sm mx-auto mt-12 p-8 lg:p-12 focus-within:border-2 focus-within:border-highlight">
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
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap:0 md:gap-2 lg:gap-4 justify-around items-center mx-auto">
        <div className="md:mx-auto">
        <p>
          <label className="font-mono tracking-tight">
            First Name:
            <br />
            <input className="bg-white dark:bg-dark dark:text-white text-dark text-base font-sans border-transparent focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-darkPrimary focus:border-transparent rounded-sm mt-2 mb-4 lg:p-2" type="text" name="first-name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label className="font-mono tracking-tight">
            Last Name:
            <br />
            <input  className="bg-white dark:bg-dark dark:text-white text-dark text-base font-sans border-transparent focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-darkPrimary focus:border-transparent rounded-sm mt-2 mb-4 lg:p-2" type="text" name="last-name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label className="font-mono tracking-tight">
            Email Address:
            <br />
            <input  className="bg-white dark:bg-dark dark:text-white text-dark text-base font-sans border-transparent focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-darkPrimary focus:border-transparent rounded-sm mt-2 mb-4 lg:p-2" type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        </div>
        <p className="md:mx-auto">
          <label className="font-mono tracking-tight">
            Message:
            <br />
            <textarea className="bg-white dark:bg-dark dark:text-white text-dark text-base font-sans border-transparent focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-darkPrimary focus:border-transparent rounded-sm mt-2 mb-4 lg:p-2" name="message" onChange={handleChange}/>
          </label>
        </p>
        </div>
        <button type="submit" className="flex justify-center bg-secondary hover:brightness-125 text-white font-semibold font-mono uppercase focus:ring-highlight rounded shadow-md py-3 px-12 mt-4 mx-auto transition duration-500">Send</button>
      </form>
      </div>
  )
  }