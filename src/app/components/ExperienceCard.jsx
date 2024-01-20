"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

function ExperienceCard({experience}) {
  return (
    // border rounded-md border-rose-800
    
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[90vw] md:w-[600px] xl:w-[900px] snap-center bg-[rgb(13,13,13)] p-2 hover:opacity-100 opacity-100 md:opacity-60 lg:opacity-60 xl:opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden '>
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
            <h4 className='text-2xl md:text-4xl font-light'>{experience.title}</h4>
            <p className='font-bold text-xl md:text-2xl mt-1 text-rose-800'>{experience.company}</p> 
            <div className='flex space-x-2 my-2 bg-fuchsia-800 rounded-full items-center justify-center'>
                {experience.tech.map((icon, index) => (
                  <Image key={index} width={10} height={10} src={icon} alt='tech' className='h-7 w-7 md:h-10 md:w-10 md:hover:animate-bounce' />
                ))}
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