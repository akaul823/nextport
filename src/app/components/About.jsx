// 
"use client";
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
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
        <br>
        
        </br>
        <h3 className='text-2xl md:text-4xl font-semibold font-style: italic hover:not-italic'>Get to know me</h3>
        <p className='text-sm md:text-base lg:text-base text-rose-800'>
          My name is Avi Kaul, and by trade, I am a software engineer. Since childhood, I have had a deep curiosity and fascination with math and puzzles, especially those that took me a lot of time and effort to figure out. In order to satiate this curiosity of puzzles in a 
          real world application, I decided to earn my bachelors degree in political science focussing on international relations and comparative politics, looking to explore and understand the dynamics of the grand game that occupies the world we live in. I was able to explore this puzzle in both a normative
          and empirical way, and it is from the latter that I realized my calling in engineering software. I was given large and chaotic datasets and tasked with finding a way to use that information to support my normative claims. I loved the idea of taking a bunch of seemingly random numbers and using them to 
          tell a story. When creating these mechanisms, I found many exciting similarities to how I was programming the computer with how I learned things. I continued my journey at Flatiron School where I earned a certification in Software Engineering. 
        </p>
        <p className='text-sm md:text-base lg:text-base text-rose-800'>
          I am versed in full stack web and mobile development and currently expanding my skillset to integrate software and hardware that I build. Outside of a professional setting,
          you can find me training for an Ironman 140.6 triathlon, learning about nonlinear dynamics and chaos, training Muay Thai, or in the mountains.
        </p>
      </div>
    </motion.div>
  )
}

export default About;
