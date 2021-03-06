import React, { useState } from "react"
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"
import  "./layout.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { onClick } = props;
  return (
      <div className="arrows">
        <button
          aria-label="next slide"
          className='right-arrow'
          onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
     
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrows">
      <button
        aria-label="previous slide"
        className="left-arrow"
        onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
        </button>
    </div>
  );
}

const Certs = () => {
  const settings = {
    className: 'certs-carousel',
    centerMode: true,
   // arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    autoplay: false,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalMode: false,
    useCSS: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [activeSlide, setActiveSlide] = useState(0)

  return (
      <>
      <div id="certs" className="dark:bg-bgPrimary bg-primary w-full h-full text-center py-32">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="section-heading w-auto text-3xl tracking-wide font-bold text-white">Certifications</h1>
        </div>

        <Slider {...settings} className="certs-carousel" beforeChange={(_, next) => setActiveSlide(next)}>
        <div className="rounded-sm" activeSlide={activeSlide}>
            <StaticImage className="shadow-inner" src="../images/react-udemy.jpg" alt="Modern React Bootcamp - Udemy"  placeholder="blurred" loading="eager" />
          </div>
          
          <div className="rounded-sm">
            <StaticImage className="shadow-inner" src="../images/front-end-libraries-fcc.png" alt="Front End Libraries - FreeCodeCamp"  placeholder="blurred" loading="eager" />
          </div>

          <div className="rounded-sm">
            <StaticImage className="shadow-inner" src="../images/responsive-design-fcc.png" alt="Responsive Design - FreeCodeCamp"  placeholder="blurred" loading="eager" /> 
          </div>

          {/* duplicates */}
          <div className="rounded-sm">
            <StaticImage className="shadow-inner" src="../images/front-end-libraries-fcc.png" alt="Front End Libraries - FreeCodeCamp"  placeholder="blurred" loading="eager" />
          </div>

          <div className="rounded-sm">
            <StaticImage className="shadow-inner" src="../images/react-udemy.jpg" alt="Modern React Bootcamp - Udemy"  placeholder="blurred" loading="eager" />
          </div>

          <div className="rounded-sm">
            <StaticImage className="shadow-inner" src="../images/responsive-design-fcc.png" alt="Responsive Design - FreeCodeCamp"  placeholder="blurred" loading="eager" /> 
          </div>
        </Slider>
        </div>
        <div className="dark:bg-bgPrimary bg-primary relative skew-y-[5deg] w-full h-36 lg:h-48 -mt-60 lg:-mt-80 -mb-20"></div>
      </>
    )
  }


export default Certs