import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import { ThemeToggle } from "../themeToggle"
import "./menu.css"

var styles = {
  bmBurgerBars: {
    background: "#f8f8f8",
    height: "3px",
  },
  bmBurgerBarsHover: {
    background: "#ffffff",
  },
  bmCrossButton: {
    top: "25px",
    right: "24px",
    height: "28px",
    width: "28px",
  },
  bmCross: {
    height: "28px",
    background: "#201335",
  },
  bmMenuWrap: {
    position: "fixed",
    top: "0",
    height: "100%",
    background: "#fce762",
  },
  bmMenu: {
    background: "#fce762",
    padding: "2.5em 1.5em 0",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    background: "#fce762",
    paddingTop: "3rem",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
}

function NavMenu() {
  return (
    <>
      <a className="skip-nav" href="#main">
        Skip to main content
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
      <nav className="flex h-full items-center px-8 pt-5 pb-6 lg:px-0">
        <h2 className="home-link">
          <Link to="/">Nikki Peel</Link>
        </h2>
        <div className="nav-links hidden md:flex">
          <Link to="/about" activeClassName="menu-active">
            about
          </Link>
          <Link to="/projects" activeClassName="menu-active">
            projects
          </Link>
          <Link to="/contact" activeClassName="menu-active">
            contact
          </Link>
          <Link to="/blog" activeClassName="menu-active">
            blog
          </Link>
        </div>
        <ThemeToggle></ThemeToggle>
      </nav>

      <Menu
        class="mobileNav absolute top-0 right-0 z-40 m-0 lg:hidden"
        right
        styles={styles}
      >
        <Link to="/about" activeClassName="menu-active">
          about
        </Link>
        <Link to="/projects" activeClassName="menu-active">
          projects
        </Link>
        <Link to="/contact" activeClassName="menu-active">
          contact
        </Link>
        <Link to="/blog" activeClassName="menu-active">
          blog
        </Link>
      </Menu>
    </>
  )
}

export default NavMenu
