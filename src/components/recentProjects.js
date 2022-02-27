import React from 'react';
import {Link} from 'gatsby';
import Projects from './projects';

const RecentProjects = () => {
  return (
    <div id="projects" className="dark:bg-bgPrimary bg-primary w-full h-full flex flex-col justify-center items-center py-20">
        <h2 className="section-heading text-center w-auto text-3xl tracking-wide font-bold text-white">Recent Projects</h2>
        <Projects></Projects>
        <div className="flex justify-center bg-primary dark:bg-bgPrimary pb-20 mx-auto">
    <Link to="/works" className="font-mono bg-secondary hover:brightness-125 hover:scale-105 hover:text-large text-white font-semibold rounded shadow-md py-2 px-4 m-6 transition duration-500 focus:ring-2 focus:ring-highlight tracking-tight">View All</Link>
  </div>
    </div>
  )}

  export default RecentProjects;