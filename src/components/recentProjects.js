import React from 'react';
import Projects from './projects';

const RecentProjects = () => {
  return (
    <div id="projects" className="dark:bg-bgPrimary bg-primary w-full h-full flex flex-col justify-center items-center py-20">
        <h1 className="section-heading text-center w-auto text-3xl tracking-wide font-bold text-white">Recent Projects</h1>
        <Projects ></Projects>
    </div>
  )}

  export default RecentProjects;