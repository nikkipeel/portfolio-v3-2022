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
    background: "#ffffff",
  },
  bmMenuWrap: {
    position: "fixed",
    top: "0",
    height: "100%",
    background: "#192d35",
  },
  bmMenu: {
    background: "#192d35",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    background: "#192d35",
    paddingTop: "3rem",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

function NavMenu() {
  return (
    <>
      <nav className="flex h-full items-center px-8 pt-5 pb-6 lg:px-0">
        <h2>Nikki Peel</h2>
        <div className="nav-links hidden md:flex">
          <Link to="/" activeClassName="menu-active">
            home
          </Link>
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
        <Link to="/" activeClassName="menu-active">
          Home
        </Link>
        <Link to="/about" activeClassName="menu-active">
          About
        </Link>
        <Link to="/projects" activeClassName="menu-active">
          Projects
        </Link>
        <Link to="/contact" activeClassName="menu-active">
          Contact
        </Link>
        <Link to="/blog" activeClassName="menu-active">
          Blog
        </Link>
      </Menu>
    </>
  )
}

export default NavMenu
