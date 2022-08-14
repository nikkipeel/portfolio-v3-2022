import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import { ThemeToggle } from "./themeToggle"
import "./layout.css"

var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "32px",
    height: "28px",
    right: "36px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "#f8f8f8",
    height: "3px",
  },
  bmBurgerBarsHover: {
    background: "#ffffff",
  },
  bmCrossButton: {
    top: "20px",
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
    background: "#2B293C",
  },
  bmMenu: {
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    paddingTop: "3rem",
  },
  bmItem: {
    display: "flex",
    flexDirection: "columns",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

function NavMenu() {
  return (
    <>
      <nav className="flex h-full items-center justify-center bg-dark px-8 pt-5 pb-6 text-white xl:px-20">
        <div className="mx-auto hidden text-white md:flex">
          <Link
            to="/"
            activeClassName="underline"
            className="underline-offset mx-8 text-base text-white transition duration-500 hover:text-white hover:underline focus:text-white"
          >
            home
          </Link>
          <Link
            to="/about"
            activeClassName="underline"
            className="underline-offset mx-8 text-base text-white transition duration-500 hover:text-white hover:underline focus:text-white"
          >
            about
          </Link>
          <Link
            to="/projects"
            activeClassName="underline"
            className="underline-offset mx-8 text-base  text-white transition duration-500 hover:text-white hover:underline focus:text-white"
          >
            projects
          </Link>
          <Link
            to="/contact"
            activeClassName="underline"
            className="underline-offset mx-8 text-base  text-white transition duration-500 hover:text-white hover:underline focus:text-white"
          >
            contact
          </Link>
          <Link
            to="/blog"
            activeClassName="underline"
            className="underline-offset mx-8 text-base  text-white transition duration-500 hover:text-white hover:underline focus:text-white"
          >
            blog
          </Link>
        </div>
        <ThemeToggle></ThemeToggle>
      </nav>

      <Menu
        class="mobileNav absolute top-0 right-0 z-40 m-0 bg-dark text-center text-white lg:hidden"
        right
        styles={styles}
      >
        <a
          href="/"
          className="menu-item  white mt-1 block cursor-pointer py-3 tracking-tight transition  duration-500 hover:text-white hover:underline focus:text-white"
        >
          Home
        </a>
        <a
          href="/about"
          className="menu-item white mt-1 block cursor-pointer py-3 tracking-tight transition  duration-500 hover:text-white hover:underline focus:text-white"
        >
          About
        </a>
        <a
          href="/projects"
          className="menu-item  white mt-1 block cursor-pointer py-3 tracking-tight transition duration-500 hover:text-white hover:underline focus:text-white"
        >
          Projects
        </a>
        <a
          href="/contact"
          className="menu-item  white mt-1 block cursor-pointer py-3 tracking-tight transition duration-500 hover:text-white hover:underline focus:text-white"
        >
          Contact
        </a>
        <a
          href="/blog"
          className="menu-item  white mt-1 block cursor-pointer py-3 tracking-tight transition duration-500 hover:text-white hover:underline focus:text-white"
        >
          Blog
        </a>
      </Menu>
    </>
  )
}

export default NavMenu
