// 
"use client";
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-5 md:px-10 justify-center mx-auto items-center'
    >
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl text-rose-800'>About</h3>
      
      <motion.img 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
        src="/images/ironman.jpeg" 
        className='mb-1 md:mb-0 flex-shrink-0 w-32 h-32 md:w-64 md:h-64 xl:w-[350px] xl:h-[350px] sm:w-[150px] sm:h-[150px] rounded-full border border-rose-800 object-cover'
      />
      <div className='space-y-0 md:space-y-10 px-0 md:px-10'>
        <h3 className='text-2xl md:text-4xl font-semibold font-style: italic hover:not-italic'>Get to know me</h3>
        <p className='text-sm md:text-base lg:text-lg text-rose-800'>
          I am a passionate explorer, ever on a journey of discovery—whether it's treading new physical terrains, diving deep into intellectual 
          challenges, or embarking on spiritual quests to unearth 
          deeper layers of self-awareness. I am not just driven by 
          curiosity; I am fueled by it. Challenging conventions, 
          dissecting complexities, and solving intricate problems are more than just pursuits—they are thrilling adventures with countless possibilities.
        </p>
        <p className='text-sm md:text-base lg:text-lg text-rose-800'>
          I am a passionate explorer, ever on a journey of discovery—whether it's treading new physical terrains, diving deep into intellectual 
          challenges, or embarking on spiritual quests to unearth 
          deeper layers of self-awareness. I am not just driven by 
          curiosity; I am fueled by it. Challenging conventions, 
          dissecting complexities, and solving intricate problems are more than just pursuits—they are thrilling adventures with countless possibilities.
        </p>
      </div>
    </motion.div>
  )
}

export default About;
