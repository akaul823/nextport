"use client";
import React from 'react'
import { motion } from 'framer-motion';

function Skill({directionLeft}) {
  return (
    <div className='group relative flex cursor-pointer md:hover:animate-bounce lg:hover:animate-bounce xl:hover:animate-bounce'>
        <motion.img
        src='/images/Python.png'
        initial={{
            x: directionLeft ? -200:200,
            opacity: 0,
        }}
        transition={{
            duration: 1,
        }}
        whileInView={{
            opacity: 1, x:0
        }} 
        className='object-cover w-24 h-24 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out ' 
        />
        <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300
        ease-in-out group-hover:bg-fuchsia-800 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full
        z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-rose-800 text-3xl font-bold opacity-100'>
                    100%
                </p>
            </div>
        </div>
    </div>
  ) 
}

export default Skill