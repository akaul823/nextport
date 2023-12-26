"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-500'>Avi Kaul{" "}</span>
                    <br></br>
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        1500, // wait 1s 
        'Problem Solver',
        1500,
        'Creative Explorer',
        1500,
        'Entrepreneur',
        1500
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                </h1>
                <p className='text-[#a0b1be] text-base sm:text-lg mb-6 lg:text-xl'>
                    I hate puzzles. They need to be solved. Let's collaborate and have some fun!
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-600 via-red-700 to-red-500 hover:bg-red-600 text-white animate-pulse'>Hire Me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-600 via-red-700 to-red-500 hover:bg-red-700 text-white border border-red-700 mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-black w-500 h-400 relative overflow-hidden'>
                <Image
                    src="/images/black.png"
                    alt='hero image'
                    width={400}
                    height={400}
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection


