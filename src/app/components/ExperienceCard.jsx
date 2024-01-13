"use client";
import React from 'react'
import { motion } from 'framer-motion';

function ExperienceCard({experience}) {
  return (
    // border rounded-md border-rose-800
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] sm:snap-start snap-center bg-[rgb(13,13,13)] p-2 hover:opacity-100 opacity-100 md:opacity-60 lg:opacity-60 xl:opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            opacity: 1,
            y:0,
        }} 
        viewport={{
            once: true
        }} 
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-center object-fill border border-rose-800'
        src={experience.imageUrl} alt={experience.company} />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience.title}</h4>
            <p className='font-bold text-2xl mt-1 text-rose-800'>{experience.company}</p> 
            <div className='flex space-x-2 my-2 bg-fuchsia-800 rounded-full items-center justify-center'>
                {experience.tech.map((icon, index) => (
                  <img key={index} src={icon} className='h-10 w-10 hover:animate-bounce' />
                ))}
                {/* Tech Used */}
                {/* Tech Used */}
                {/* I need to create an array and map out the tech icons used/learned */}
            </div>
            <p className='uppercase py-5'>{`${experience.startDate} - ${experience.endDate}`}</p>
            <ul className='list-disc space-y-4 ml-5 text-md text-rose-800'>
                {experience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard 