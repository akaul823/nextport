"use client";
import React from 'react';
import {motion} from 'framer-motion';
function About() {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{opacity:1}}
    transition={{duration:2.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-rose-800'>About</h3>
        <motion.img 
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{
            x: 0, 
            opacity: 1,
        }}
        viewport={{once:true}}
        transition={{
            duration:1.2,
        }}
        src="/images/ironman.jpeg" className='-mb-20 sm:w-45 sm:h-45 md:mb-0 flex-shrink-0 w-56 h-56 border rounded-full border-rose-800 object-cover md:rounded-full md:w-[350px] md:h-[350px] xl:w-[500px] xl:h-[500px]'/>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Get to know me</h4>
            <p className='text-base lg:text-lg'>I am a passionate explorer, ever on a journey of discovery—whether it's treading new 
            physical terrains, diving deep into intellectual challenges, or embarking on spiritual quests to 
            unearth deeper layers of self-awareness. I am not just driven by curiosity; I am fueled by it. Challenging conventions, 
            dissecting complexities, and solving intricate problems are more than just pursuits—they are thrilling adventures with countless possibilities.</p>
        </div>
    </motion.div>
  )
}

export default About