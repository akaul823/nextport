"use client";
import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard';
// min-h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row
//     xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Microgrid Labs",
      startDate: "December 2023",
      endDate: "present",
      tech: ["/images/React.png","/images/Figma.png","/images/Python.png","/images/Flask.png"],
      description: [
        "Actively engaged in a dynamic team environment, focusing on a major overhaul of Microgrid Labs' EVopt user interface.",
        "Implementing the integration of cutting-edge API services, streamlining data flow and enhancing interactivity for a seamless user experience.",
        "Applying rigorous Software Development Life Cycle (SDLC) principles, I've contributed to various phases from design, development, testing, and deployment, ensuring high-quality software delivery."
      ],
      imageUrl: "/images/tester.png",
    },
    {
      id: 2,
      title: "Software Engineering Student",
      company: "Flatiron School",
      startDate: "May 2023",
      endDate: "September 2023",
      tech: ["/images/JavaScript.png","/images/Python.png", "/images/React.png","/images/Flask.png","/images/SQLAlchemy.png","/images/SQLite.png","/images/TensorFlow.png","/images/PyTorch.png"],
      description: [
        "Full stack software engineering bootcamp where I learned front and backend technologies and practices to create a seamless client to server connection",
        "Started a technical blog, 'Into the Software-Verse', exploring the similarities between human and machine learning",
        "Integrated full stack curriculum with mobile development and computer vision that culminated in my capstone project",
      ],
      imageUrl: "/images/flatiron.png",
    },
  ];
  // Dom manipulation and connecting to the server, API and Database creation and management, Object oriented programming and object relational mapping
  
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2.5 }}
    
    className='min-h-screen flex overflow-hidden flex-col text-left
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='top-24 md:top-20 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl text-rose-800 z-20 mt-16'>
            Experience
        </h3>
        <div className='w-screen md:w-full flex space-x-5 overflow-x-scroll p-10 mt-3 snap-x 
        snap-mandatory scrollbar-track-[rgb(24,24,24)] scrollbar-thumb-rose-800 scrollbar-thin'>
            {/* ExperienceCards */}
            {experiences.map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
    </motion.div>
  )
}

export default Experience