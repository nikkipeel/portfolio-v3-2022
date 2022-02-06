import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
        <footer className="flex bg-secondary justify-between w-full h-full p-8">

            <p className="text-white text-lg font-semibold tracking-wide">Nikki Peel</p>
            <div className="flex">
                <a aria-label="linked in" href="https://www.linkedin.com/in/nikkipeel" className="text-white text-xl pr-4"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a aria-label="github"  href="https://www.github.com/nikkipeel" className="text-white text-xl pr-4"><FontAwesomeIcon icon={faGithub} /></a>
                <a aria-label="codepen" href="https://www.codepen.io/nikki-peel" className="text-white text-xl pr-4"><FontAwesomeIcon icon={faCodepen} /></a>
                <a aria-label="blog" href="https://nikkipeel.netlify.app" className="text-white text-xl  pr-4"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            </div>
        </footer>
  )
  }


export default Footer
