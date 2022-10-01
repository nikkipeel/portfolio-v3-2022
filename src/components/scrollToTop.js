import React, { useState, useEffect } from "react"
import ScrollButton from "./buttons/ScrollButton"

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <>
      {show && (
        <ScrollButton
          handleClick={handleClick}
          id="scroll-to-top-link"
          label="back to top"
          text="back to top"
          classes="button--scroll overflow-x-none fixed bottom-32 right-8 z-50 lg:bottom-52 lg:right-16"
        />
      )}
    </>
  )
}
export default ScrollToTop
