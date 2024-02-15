"use client"
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='min-h-screen max-w-7xl mx-auto px-5 md:px-10 pt-20 md:pt-24'> {/* Adjusted padding to create space from the header */}
      
      {/* Heading */}
      <h3 className='text-lg md:text-2xl text-rose-800 uppercase tracking-[10px] md:tracking-[20px] text-center mb-10'>About</h3> {/* Margin bottom added for spacing after heading */}

      {/* Flex container for image and text content */}
      <div className='flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-10 md:space-x-10'>
        
        {/* Image with motion */}
        <motion.img 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0 }}
          viewport={{once:true}}
          src="/images/wedding.jpeg" 
          className='w-[170px] h-[170px] md:w-[450px] md:h-[450px] border rounded-full border-rose-800 object-cover'
        />

        {/* Text content */}
        {/* className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-900 scrollbar-thumb-rose-800' */}
        <div className='space-y-3 md:space-y-5'>
          <h3 className='text-2xl md:text-4xl font-semibold italic hover:not-italic'>Get to know me</h3>
          <p className='text-sm md:text-base lg:text-base text-rose-800'>
            Since childhood, I have had a deep curiosity and fascination with the world around me and how it works. In order to satiate this curiosity in an 
            applicable way, I decided to earn my bachelor's degree in political science focusing on international relations and comparative politics, looking to explore and understand the dynamics of the grand game that occupy the world we live in. I was able to explore this puzzle in both a normative
            and empirical way, and it is from the latter that I realized my fascination and calling in providing solutions through engineering software. <span className='text-fuchsia-800'>I loved the idea of taking a bunch of seemingly random numbers and using them to tell a story. </span> 
            When creating these mechanisms, I found many exciting similarities between how I was programming the computer and how I learned things.
          </p>
          <p className='text-sm md:text-base lg:text-base text-rose-800'> I am versed in front and backend development, and I am currently learning more about machine learning and expanding my skillset to integrate software and hardware that I build. Outside of a professional setting,
            you can find me training for an Ironman 140.6 triathlon, learning about nonlinear dynamics and chaos, training Muay Thai, or reading/watching One Piece. </p>
        </div>
      </div>
    </div>
  );
}

export default About;

