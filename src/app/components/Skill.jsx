"use client";
import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';

function Skill({src, name, proficiency, directionLeft}) {
  return (
    <div className='group relative flex cursor-pointer md:hover:animate-bounce lg:hover:animate-bounce xl:hover:animate-bounce'>
        <motion.img
        src={src}
           initial={{
                opacity: 0,
            }}
        transition={{
            duration: 1,
        }}
        whileInView={{
            opacity: 1
        }} 
        viewport={{
            once: true
        }} 
        className='object-cover w-12 h-12 md:w-24 md:h-24 xl:w-32 xl:h-32
        filter' 
        />
        {/* group-hover:grayscale transition duration-300 ease-in-out */}
        <div className='absolute opacity-0 md:group-hover:opacity-100 transition duration-300
        ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full
        z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-rose-700 md:text-3xl font-bold opacity-100'>
                    {proficiency}
                </p>
            </div>
        </div>
    </div>
  ) 
}

export default Skill