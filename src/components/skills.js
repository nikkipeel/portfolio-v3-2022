import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUniversalAccess, faPencilRuler} from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <div className="dark:bg-bgPrimary bg-primary w-full h-full">
        <div className="flex flex-col justify-center items-center w-full lg:w-50 py-20">
        <h2 className="section-heading w-auto text-4xl tracking-wide font-bold text-white">Skills</h2>
        
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:w-3/4 gap-20 md:gap-8 mt-20 mx-auto p-4">
            <div className="col rounded-sm dark:bg-bgDark dark:text-white bg-white85 text-center text-dark">
            <FontAwesomeIcon icon={faUniversalAccess} className="dark:text-darkPrimary text-dark text-7xl pointer-events-none" style={{marginTop: '-2rem'}}/>
                <h3 className="py-2 text-2xl font-semibold font-mono dark:text-white text-dark leading-tight dark:shadow-none"  style={{textShadow: '-1.5px 1.5px 0px #4A94A8'}}>Accessibility</h3>
               
                <p className="pb-8 px-8 dark:text-white65">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>

            <div className="col rounded-sm dark:bg-bgDark dark:text-white bg-white85 text-center text-dark">
            <FontAwesomeIcon icon={faPencilRuler} className="dark:text-darkPrimary text-dark text-7xl pointer-events-none" style={{marginTop: '-2rem'}}/>
                <h3 className="py-2 text-2xl font-semibold font-mono dark:text-white text-dark leading-tight" style={{textShadow: '-1.5px 1.5px 0px #4A94A8'}}>Design</h3>
               
                <p className="pb-8 px-8 dark:text-white65">Lorem, ipsum dolor sit amet consectetur adipisicig elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>
            <div className="col rounded-sm dark:bg-bgDark dark:text-white bg-white85 text-center text-dark">
            <FontAwesomeIcon icon={faCode} className="dark:text-darkPrimary text-dark text-7xl pointer-events-none" style={{marginTop: '-2rem'}}/>
                <h3 className="py-2 text-2xl font-semibold font-mono dark:text-white  text-dark leading-tight"  style={{textShadow: '-1.5px 1.5px 0px #4A94A8'}}>Development</h3>
                <p className="pb-8 px-8 dark:text-white65">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>
        </div>
        </div> 
    </div>
  )
  }


export default Skills
