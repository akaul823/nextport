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
      tech: " ",
      description: [
        "Summary Point 1",
        "Summary Point 2",
        "Summary Point 3",
        "Summary Point 4",
      ],
      imageUrl: "/images/tester.png",
    },
    {
      id: 2,
      title: "Software Engineering Student",
      company: "Flatiron School",
      startDate: "May 2023",
      endDate: "September 2023",
      tech: "",
      description: [
        "Summary Point 1",
        "Summary Point 2",
        "Summary Point 3",
      ],
      imageUrl: "/images/flatiron.png",
    },
  ];
  
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2.5 }}
    
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-28 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl text-rose-800'>
            Experience
        </h3>
        <br>
   
        </br>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 mt-10 md:mt-14 snap-x 
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