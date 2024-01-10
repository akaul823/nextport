"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
// grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4
function Skills() {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    viewport={{
      once: true
  }} 
    className='min-h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row
    xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center pt-36 md:pt-40'>
        <h3 className='absolute top-24 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl text-rose-800'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-sm opacity-60'>Check out my stack!</h3>
        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div> 
  )
}

export default Skills