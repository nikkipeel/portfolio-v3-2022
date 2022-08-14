import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          if (theme == null) {
            return null
          }
          return (
            <div>
              <label className="relative flex items-center justify-between p-1">
                <span className="hidden">
                  Toggle
                  {theme === "dark" ? "light" : "dark"} theme
                </span>
                <input
                  type="checkbox"
                  className="absolute w-5 cursor-pointer opacity-0"
                  checked={theme === "dark"}
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                />{" "}
                {/* Sun */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" block h-5 w-5 animate-fade dark:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                {/* Moon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-5 w-5 animate-fade dark:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </label>
            </div>
          )
        }}
      </ThemeToggler>
    )
  }
}
