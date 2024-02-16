"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons'
import { useState } from 'react';

function Projects() {
  const projectsData2 = [
    {
      id:1,
      title: "classify",
      description: "A mobile application to classify flowers",
      image: "images/cool.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/akaul823/phase5project",
      previewUrl: "https://www.youtube.com/watch?v=v2DMubJlMyU"
    },
    {
      id:2,
      title: "karBazaar",
      description: "An online marketplace for buying and selling cars",
      image: "images/shelly.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/akaul823/phase4_project",
      previewUrl: "https://www.youtube.com/watch?v=uqAtEq20G6A"
    },
    {
      id:3,
      title: "organizedTime",
      description: "A command line interface used to manage projects and employees",
      image: "images/geo.png",
      tag: ["All", "Console"],
      gitUrl: "https://github.com/akaul823/phase3-python-sql-project",
      previewUrl: "https://www.youtube.com/watch?v=gR3cApqgG80"
    },
    {
      id:4,
      title: "chaser",
      description: "A plane flying game",
      image: "images/chaser.png",
      tag: ["All","Console"],
      gitUrl: "https://github.com/akaul823/chaser",
      previewUrl: "https://www.youtube.com/watch?v=ePU4Ua_SVig",
      
    }
  ]
  

return (
  <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 2 }} 
    className='min-h-screen flex overflow-hidden flex-col text-left
    max-w-full px-10 justify-evenly mx-auto items-center'>
    
    <h3 className='top-24 md:top-20 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl text-rose-800 z-20 mt-16'>
      Projects
    </h3>
    <div className='w-screen flex overflow-x-scroll overflow-y-hidden p-10 mt-1 snap-x snap-mandatory z-0 scrollbar scrollbar-track-gray-900 scrollbar-thumb-rose-800'> 
      {projectsData2.map((project, index) => (
        <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-30 h-auto'>
          <div className='relative group'>
            <motion.img 
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image}
              alt={project.title}
              className='w-[225px] h-[225px] rounded-lg'
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
              {/* <a href={project.gitUrl} className='text-white px-4 py-2 m-2 bg-rose-800 rounded hover:bg-rose-900 transition'>GitHub</a> */}
              <SocialIcon 
                fgColor='#991b1b'
                url={project.gitUrl}
                bgColor='transparent'
                className='hover:opacity-50'
              ></SocialIcon>
              <SocialIcon 
                fgColor='#991b1b'
                url={project.previewUrl}
                bgColor='transparent'
                className='hover:opacity-50'
              ></SocialIcon>
              {/* <a href={project.previewUrl} className='text-white px-4 py-2 m-2 bg-rose-800 rounded hover:bg-rose-900 transition'>Preview</a> */}
            </div>
          </div>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center text-fuchsia-800'>
              {project.title}
            </h4>
            {/* <img src='images/python.png' className='h-10 w-10 hover:animate-bounce' /> */}
            <p className='text-rose-900 text-lg text-center md:text-left'>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
{/* <span className=' underline decoration-rose-900 text-fuchsia-800'>Project {index + 1} of {projectsData2.length}:</span> */}
    {/* <div className='w-full absolute top-[30%] bg-rose-800 bg-opacity-40 left-0 h-[400px] skew-y-12'/> */}
  </motion.div>
);
}

export default Projects;